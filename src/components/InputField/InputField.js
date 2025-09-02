import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
export const InputField = ({ value, onChange, label, placeholder, helperText, errorMessage, disabled, invalid, variant = "outlined", size = "md", type = "text", clearable = false, }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState("");
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;
    const handleChange = (e) => {
        if (!isControlled)
            setInternalValue(e.target.value);
        onChange?.(e);
    };
    return (_jsxs("div", { className: "flex flex-col gap-1 w-full", children: [label && _jsx("label", { className: "text-sm font-medium dark:text-gray-200", children: label }), _jsxs("div", { className: "relative flex items-center", children: [_jsx("input", { value: inputValue, onChange: handleChange, type: type === "password" && showPassword ? "text" : type, placeholder: placeholder, disabled: disabled, "aria-invalid": invalid, "aria-disabled": disabled, className: `w-full rounded-md transition 
            ${sizeClasses[size]} 
            ${variantClasses[variant]} 
            ${invalid ? "border-red-500 focus:ring-red-500" : ""} 
            ${disabled ? "bg-gray-200 cursor-not-allowed dark:bg-gray-700" : ""}
          ` }), clearable && inputValue && !disabled && (_jsx("button", { type: "button", onClick: () => handleChange({ target: { value: "" } }), className: `absolute ${type === "password" ? "right-8" : "right-2"} text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100`, children: "\u2715" })), type === "password" && (_jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100", children: showPassword ? "🙈" : "👁" }))] }), invalid && errorMessage ? (_jsx("span", { className: "text-xs text-red-500", children: errorMessage })) : helperText ? (_jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: helperText })) : null] }));
};
