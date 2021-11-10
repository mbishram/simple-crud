import { MainLayout } from "@/layouts/MainLayout";
import { useRouter } from "next/router";

export default function Detail() {
	const router = useRouter();
	const { id } = router.query;
	return <MainLayout>{id}</MainLayout>;
}
