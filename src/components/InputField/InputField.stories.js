import { InputField } from "./InputField";
const meta = {
    title: "Components/InputField",
    component: InputField,
};
export default meta;
export const Default = {
    args: {
        label: "Username",
        placeholder: "Enter your name",
        helperText: "This is a helper text",
        variant: "outlined",
        size: "md",
    },
};
export const Invalid = {
    args: {
        label: "Email",
        placeholder: "Enter your email",
        invalid: true,
        errorMessage: "Invalid email",
    },
};
export const Password = {
    args: {
        label: "Password",
        type: "password",
        placeholder: "Enter password",
    },
};
