import { HtmlHTMLAttributes } from "react";
import "./Button.styles.css";
import clsx from "clsx";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    variant?: "contained" | "text";
}

export const Button = (props: ButtonProps) => {
    const { className, children, variant = "contained", ...other } = props;
    return (
        <button className= {clsx(className + ".Button-root", variant)} {...other}>
            {children}
        </button>
    );
};