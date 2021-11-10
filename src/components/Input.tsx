import { HTMLProps } from "react";

export function Input({
	className,
	placeholder,
	label,
	id,
	...props
}: HTMLProps<HTMLInputElement>) {
	return (
		<div className={className}>
			{label && (
				<label htmlFor={id} className="block mb-2 text-gray-400">
					{label}
				</label>
			)}
			<input
				id={id}
				placeholder={placeholder}
				className="w-full px-4 py-3 rounded-lg shadow-lg"
				{...props}
			/>
		</div>
	);
}
