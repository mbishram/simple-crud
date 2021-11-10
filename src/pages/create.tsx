import { MainLayout } from "@/layouts/MainLayout";
import { Input } from "@/components/Input";
import Head from "next/head";
import { Formik, FormikHelpers } from "formik";
import { Button } from "@/components/Button";
import { UserUtils } from "@/utils/user-utils";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { Alert } from "@/components/Alert";

export default function Create() {
	const [timer, setTimer] = useState(setTimeout(() => {}));

	const initialValues = { id: -1, name: "", nip: "", tlp: "", email: "" };
	const handleSubmit = (values: User, { setStatus }: FormikHelpers<User>) => {
		const res = UserUtils.createUser(values);
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
				<title>Create - {process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>
			<h2 className="text-5xl font-bold text-gray-800 mb-8">
				Create User
			</h2>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{({ handleSubmit, handleChange, values, status }) => (
					<form onSubmit={handleSubmit} className="grid gap-6">
						{status &&
							(status?.success ? (
								<Alert type="success">{status.message}</Alert>
							) : (
								<Alert type="danger">{status.message}</Alert>
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
		</MainLayout>
	);
}
