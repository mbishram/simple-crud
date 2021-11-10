import { HTMLProps } from "react";
import clsx from "clsx";

export function Container({
	children,
	className,
	...props
}: HTMLProps<HTMLDivElement>) {
	return (
		<div
			className={clsx(
				"container px-6 mx-auto max-w-screen-md",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}
