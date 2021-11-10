import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { ButtonColor } from "@/types/button-color";

export function Button({
	children,
	className,
	color,
	fullWidth,
	small,
	disabled,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
	return (
		<button
			disabled={disabled}
			className={clsx(
				"flex justify-center rounded-lg shadow-lg",
				fullWidth ? "w-full" : "sm:w-max w-full",
				small ? "py-2 px-5" : "py-3 px-6",
				!disabled
					? color === "danger"
						? "bg-red-700 hover:bg-red-600 hover:cursor-pointer text-white"
						: "bg-blue-700 hover:bg-blue-600 hover:cursor-pointer text-white"
					: "bg-black bg-opacity-20 cursor-default",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}

type Props = {
	color?: ButtonColor;
	fullWidth?: boolean;
	small?: boolean;
};
