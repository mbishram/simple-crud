import { User } from "@/types/user";
import { Button } from "@/components/Button";

export function User({ data: { id, name, nip, tlp, email } }: Props) {
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
				<Button fullWidth>Ubah</Button>
				<Button fullWidth color="danger">
					Hapus
				</Button>
			</div>
		</article>
	);
}

type Props = {
	data: User;
};
