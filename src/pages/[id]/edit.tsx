import { MainLayout } from "@/layouts/MainLayout";
import { useRouter } from "next/router";

export default function Edit() {
	const router = useRouter();
	const { id } = router.query;
	return <MainLayout>{id}</MainLayout>;
}
