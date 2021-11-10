import { MainLayout } from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import Head from "next/head";
import { UserUtils } from "@/utils/user-utils";

export default function Detail() {
	const router = useRouter();
	const { id } = router.query;

	const user = UserUtils.getUser(Number(id)).data[0];

	return (
		<MainLayout>
			<Head>
				<title>
					{user?.name || "Name is Missing"} -{" "}
					{process.env.NEXT_PUBLIC_APP_NAME}
				</title>
			</Head>
			<h2 className="text-5xl font-bold text-gray-800 mb-2">
				{user?.name || "Name is Missing"}
			</h2>
			<p className="text-gray-400 mb-8">
				{user?.nip || "NIP is Missing"}
			</p>
			<div className="grid grid-cols-3 gap-6">
				<div className="p-4 bg-white rounded-xl shadow-lg">
					<p className="font-bold mb-1">ID</p>
					<p>{user?.id || "ID is Missing"}</p>
				</div>
				<div className="p-4 bg-white rounded-xl shadow-lg">
					<p className="font-bold mb-1">Telephone</p>
					<p>{user?.tlp || "Telephone is Missing"}</p>
				</div>
				<div className="p-4 bg-white rounded-xl shadow-lg">
					<p className="font-bold mb-1">Email</p>
					<p>{user?.email || "Email is Missing"}</p>
				</div>
			</div>
		</MainLayout>
	);
}
