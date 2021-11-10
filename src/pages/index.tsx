import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { UserUtils } from "@/utils/user-utils";
import { FormEvent, useState } from "react";
import { User } from "@/components/User";
import { Input } from "@/components/Input";

export default function Home() {
	const [allData, setAllData] = useState(UserUtils.getAllUser().data);

	const handleSearch = (event: FormEvent<HTMLInputElement>) => {
		setAllData(UserUtils.searchUser(event.currentTarget.value).data);
	};

	return (
		<MainLayout>
			<Head>
				<title>Home - {process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>
			<div className="flex justify-between mb-8 items-end gap-6">
				<h2 className="text-5xl font-bold text-gray-800">All User</h2>
				<Input
					placeholder="Search using Name, Email, or NIP"
					className="w-96"
					onChange={handleSearch}
				/>
			</div>
			<div className="grid gap-6">
				{allData.length ? (
					allData?.map((user, index) => (
						<User
							key={`user-${index}`}
							data={user}
							setData={setAllData}
						/>
					))
				) : (
					<p>User is empty!</p>
				)}
			</div>
		</MainLayout>
	);
}
