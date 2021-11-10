import { ReactNode } from "react";
import clsx from "clsx";

export const Alert = ({
	children,
	className,
	type,
	disableFixed = false,
}: Props) => {
	return (
		<div
			role="alert"
			className={clsx(
				className,
				!disableFixed &&
					"fixed top-4 right-4 sm:top-6 sm:right-6 z-50 sm:left-auto left-4",
				"py-4 px-6 rounded",
				type === "danger"
					? "bg-red-200 text-red-600 border border-red-500"
					: type === "warning"
					? "bg-yellow-200 text-yellow-600 border border-yellow-500"
					: type === "success"
					? "bg-green-200 text-green-600 border border-green-500"
					: "bg-gray-200 text-gray-600 border border-gray-500"
			)}
		>
			{children}
		</div>
	);
};

interface Props {
	children: ReactNode;
	className?: string;
	type?: "danger" | "warning" | "success";
	disableFixed?: boolean;
}
