import { type FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement>;
const Input: FC<Props> = (props) => {
    const { className, ...rest } = props;
    return (
        <input
            {...rest}
            className={twMerge(
                "p-2 px-3 rounded-lg bg-neutral-900 ring-2 ring-neutral-500",
                className,
            )}
        />
    );
};

export default Input;
