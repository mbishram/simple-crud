import { User as UserType } from "@/types/user";
import { Button } from "@/components/Button";
import { UserUtils } from "@/utils/user-utils";
import Link from "next/link";
import { useRouter } from "next/router";

export function User({ data: { id, name, nip, email }, setData }: Props) {
	const router = useRouter();

	const handleDelete = (userId: number) => {
		const res = UserUtils.deleteUser(userId);
		setData(res.data);
	};

	return (
		<article
			className="bg-white p-4 rounded-xl shadow-lg flex gap-6 items-center cursor-pointer"
			onClick={() => router.push(`/${id}`)}
		>
			<p className="font-bold mb-1 flex-grow">
				{name || "Name is Missing"}
			</p>
			<p className="mb-1 text-gray-400 sm:block hidden overflow-ellipsis">
				{email || "Email is Missing"}
			</p>
			<p className="mb-1 text-gray-400">{nip || "NIP is Missing"}</p>
			<div className="flex gap-2">
				<Link href={`/${id}/edit`}>
					<a>
						<Button small>Edit</Button>
					</a>
				</Link>
				<Button
					small
					color="danger"
					onClick={(event) => {
						event.stopPropagation();
						event.preventDefault();
						handleDelete(id);
					}}
				>
					Delete
				</Button>
			</div>
		</article>
	);
}

type Props = {
	data: UserType;
	setData: Function;
};
