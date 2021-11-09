import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Home</title>
			</Head>
			<div className="p-10 bg-red-400">Test Lorem</div>
		</div>
	);
}
