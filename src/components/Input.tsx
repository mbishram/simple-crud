import { HTMLProps } from "react";

export function Input({
	className,
	placeholder,
	id,
	...props
}: HTMLProps<HTMLInputElement>) {
	return (
		<div className={className}>
			{placeholder && (
				<label htmlFor={id} className="block mb-2 text-gray-400">
					{placeholder}
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
