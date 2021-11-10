import { MainLayout } from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import Head from "next/head";
import { Formik, FormikHelpers } from "formik";
import { Alert } from "@/components/Alert";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { UserUtils } from "@/utils/user-utils";

export default function Edit() {
	const [timer, setTimer] = useState(setTimeout(() => {}));

	const router = useRouter();
	const { id } = router.query;

	const initialValues = UserUtils.getUser(Number(id)).data[0];

	const handleSubmit = (values: User, { setStatus }: FormikHelpers<User>) => {
		const res = UserUtils.editUser(values);
		setStatus(res);

		// Close alert
		setTimer(setTimeout(() => setStatus(), 4000));
	};

	useEffect(() => {
		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<MainLayout>
			<Head>
				<title>Edit - {process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>
			<h2 className="text-5xl font-bold text-gray-800 mb-8">Edit User</h2>
			{initialValues && (
				<Formik initialValues={initialValues} onSubmit={handleSubmit}>
					{({ handleSubmit, handleChange, values, status }) => (
						<form onSubmit={handleSubmit} className="grid gap-6">
							{status &&
								(status?.success ? (
									<Alert type="success">
										{status.message}
									</Alert>
								) : (
									<Alert type="danger">
										{status.message}
									</Alert>
								))}

							<Input
								label="Name"
								placeholder="Name"
								name="name"
								id="name"
								type="text"
								onChange={handleChange}
								value={values.name}
							/>
							<Input
								label="NIP"
								placeholder="NIP"
								name="nip"
								id="nip"
								type="text"
								onChange={handleChange}
								value={values.nip}
							/>
							<Input
								label="Telephone"
								placeholder="Telephone"
								name="tlp"
								id="tlp"
								type="text"
								onChange={handleChange}
								value={values.tlp}
							/>
							<Input
								label="Email"
								placeholder="Email"
								name="email"
								id="email"
								type="email"
								onChange={handleChange}
								value={values.email}
							/>
							<Button type="submit" className="mt-2">
								Submit
							</Button>
						</form>
					)}
				</Formik>
			)}
		</MainLayout>
	);
}
