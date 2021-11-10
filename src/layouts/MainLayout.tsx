import { HTMLProps } from "react";
import { Container } from "@/components/Container";
import Link from "next/link";

export function MainLayout({ children }: HTMLProps<HTMLDivElement>) {
	return (
		<div className="flex flex-col min-h-screen">
			<nav>
				<Container className="py-8 flex justify-between">
					<Link href="/">
						<a>
							<h1 className="font-bold text-xl">
								Simple{" "}
								<span className="text-blue-700">CRUD</span>
							</h1>
						</a>
					</Link>
					<Link href="/create">
						<a className="hover:text-blue-700 font-medium">
							Create
						</a>
					</Link>
				</Container>
			</nav>
			<main className="flex-grow my-6">
				<Container>{children}</Container>
			</main>
			<footer className="py-4 text-center text-gray-400 font-light">
				<Container>&copy; 2021 Muh Bishram Y A A</Container>
			</footer>
		</div>
	);
}
