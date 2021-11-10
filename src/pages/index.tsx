import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { UserUtils } from "@/utils/user-utils";
import { useState } from "react";
import { User as UserType } from "@/types/user";
import { User } from "@/components/User";

export default function Home() {
	const [allData, setAllData] = useState(UserUtils.getAllUser().data);

	const handleSetAllData = (data: Array<UserType>) => setAllData(data);

	return (
		<MainLayout>
			<Head>
				<title>Home - {process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>
			<h2 className="text-5xl font-bold text-gray-800 mb-8">All User</h2>
			<div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
				{allData?.map((user, index) => (
					<User
						key={`user-${index}`}
						data={user}
						setData={handleSetAllData}
					/>
				))}
			</div>
		</MainLayout>
	);
}
