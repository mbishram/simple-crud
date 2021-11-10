import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { UserUtils } from "@/utils/user-utils";
import { FormEvent, useState } from "react";
import { User } from "@/components/User";
import { Input } from "@/components/Input";
import { Pagination } from "@/components/Pagination";

export default function Home() {
	const [allData, setAllData] = useState(UserUtils.getAllUser().data);
	const [currentPage, setCurrentPage] = useState(1);
	const userPerPage = 5;

	const indexOfLastUser = currentPage * userPerPage;
	const indexOfFirstUser = indexOfLastUser - userPerPage;
	const currentUser = allData.slice(indexOfFirstUser, indexOfLastUser);

	const handleSearch = (event: FormEvent<HTMLInputElement>) => {
		setAllData(UserUtils.searchUser(event.currentTarget.value).data);
	};

	const changePagination = (pageNumber: number) => setCurrentPage(pageNumber);

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
					currentUser?.map((user, index) => (
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
			<Pagination
				total={allData.length}
				userPerPage={userPerPage}
				currentPage={currentPage}
				changePagination={changePagination}
				className="mt-8"
			/>
		</MainLayout>
	);
}
