import { User } from "@/types/user";

export type CRUDReturnValue = {
	success: boolean;
	message: string;
	data?: Array<User>;
};
