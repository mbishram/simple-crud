import { User as UserType } from "@/types/user";
import { Button } from "@/components/Button";
import { UserUtils } from "@/utils/user-utils";
import Link from "next/link";

export function User({ data: { id, name, nip, tlp, email }, setData }: Props) {
	const handleDelete = (userId: number) => () => {
		const res = UserUtils.deleteUser(userId);
		setData(res.data);
	};

	return (
		<article className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-2">
			<div>
				<p className="font-bold mb-1">ID</p>
				<p>{id || "ID is Missing"}</p>
			</div>
			<div>
				<p className="font-bold mb-1">Name</p>
				<p>{name || "Name is Missing"}</p>
			</div>
			<div>
				<p className="font-bold mb-1">NIP</p>
				<p>{nip || "NIP is Missing"}</p>
			</div>
			<div>
				<p className="font-bold mb-1">Telephone</p>
				<p>{tlp || "Telephone is Missing"}</p>
			</div>
			<div>
				<p className="font-bold mb-1">Email</p>
				<p>{email || "Email is Missing"}</p>
			</div>
			<div className="grid grid-cols-2 gap-4 mt-2">
				<Link href={`/${id}/edit`}>
					<a>
						<Button fullWidth>Edit</Button>
					</a>
				</Link>
				<Button fullWidth color="danger" onClick={handleDelete(id)}>
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
