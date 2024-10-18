import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children?: ReactNode;
};

const Button: FC<Props> = (props) => {
    const { children, className, ...rest } = props;
    return (
        <button
            {...rest}
            className={twMerge(
                "rounded-xl bg-neutral-800 border border-neutral-600",
                className,
            )}
        >
            {" "}
            {children}{" "}
        </button>
    );
};

export default Button;
