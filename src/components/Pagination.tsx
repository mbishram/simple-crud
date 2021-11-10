import { HTMLProps } from "react";
import { Button } from "@/components/Button";

export function Pagination({
	total,
	userPerPage,
	currentPage,
	changePagination,
	...props
}: HTMLProps<HTMLDivElement> & Props) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(total / userPerPage); i++) {
		pageNumbers.push(i);
	}
	console.log(pageNumbers);

	return (
		<nav {...props}>
			<ul className="flex gap-4 justify-center">
				<li>
					<Button
						onClick={() => changePagination(currentPage - 1)}
						disabled={currentPage === pageNumbers[0]}
					>
						Prev
					</Button>
				</li>
				<li>
					<Button
						onClick={() => changePagination(currentPage + 1)}
						disabled={
							currentPage === pageNumbers[pageNumbers.length - 1]
						}
					>
						Next
					</Button>
				</li>
			</ul>
		</nav>
	);
}

type Props = {
	total: number;
	userPerPage: number;
	currentPage: number;
	changePagination: (number: number) => void;
};
