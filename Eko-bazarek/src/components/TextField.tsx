import clsx from "clsx";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextFieldProps
    extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "children">{
        inputProps?: InputProps;
    }

    export const TextField = (props: TextFieldProps) => (
        const { className, InputProps = {}, ...other } = props;
        return (
            <div className={clsx(className, "flex flex-col text-black")} {...other}>
                 <input className="min-h-[42px] px-2 text-black active:overline-0" 
                 {...InputProps} />
            </div> 
        );
    );