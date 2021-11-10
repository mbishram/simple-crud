import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { User } from "@/components/User";
import { UserUtils } from "@/utils/user-utils";

export default function Home() {
	return (
		<MainLayout>
			<Head>
				<title>Home - {process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>
			<h2 className="text-5xl font-bold text-gray-800 mb-8">All User</h2>
			<div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
				{UserUtils.getAllUser().data?.map((user, index) => (
					<User key={`user-${index}`} data={user} />
				))}
			</div>
		</MainLayout>
	);
}
