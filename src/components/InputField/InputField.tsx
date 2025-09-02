import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border-transparent focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white",
  outlined: "border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white",
  ghost: "border-b border-gray-300 focus:border-blue-500 focus:ring-0 dark:border-gray-600 dark:bg-transparent dark:text-white",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium dark:text-gray-200">{label}</label>}

      <div className="relative flex items-center">
        <input
          value={inputValue}
          onChange={handleChange}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          aria-disabled={disabled}
          className={`w-full rounded-md transition 
            ${sizeClasses[size]} 
            ${variantClasses[variant]} 
            ${invalid ? "border-red-500 focus:ring-red-500" : ""} 
            ${disabled ? "bg-gray-200 cursor-not-allowed dark:bg-gray-700" : ""}
          `}
        />

        {/* Clear button */}
        {clearable && inputValue && !disabled && (
          <button
            type="button"
            onClick={() =>
              handleChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
            }
            className={`absolute ${
              type === "password" ? "right-8" : "right-2"
            } text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100`}
          >
            ✕
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>

      {/* Helper or Error text */}
      {invalid && errorMessage ? (
        <span className="text-xs text-red-500">{errorMessage}</span>
      ) : helperText ? (
        <span className="text-xs text-gray-500 dark:text-gray-400">{helperText}</span>
      ) : null}
    </div>
  );
};
