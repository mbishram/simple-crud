import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { ButtonColor } from "@/types/button-color";

export function Button({
	children,
	className,
	color,
	fullWidth,
	small,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
	return (
		<button
			className={clsx(
				"hover:cursor-pointer flex justify-center text-white rounded-lg shadow-lg",
				fullWidth ? "w-full" : "sm:w-max w-full",
				small ? "py-2 px-5" : "py-3 px-6",
				color === "danger"
					? "bg-red-700 hover:bg-red-600"
					: "bg-blue-700 hover:bg-blue-600",
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
