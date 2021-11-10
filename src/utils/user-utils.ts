import { User } from "@/types/user";
import { data } from "@/data";
import { CRUDReturnValue } from "@/types/crud-return-value";

const getId = () =>
	Math.max.apply(
		Math,
		data.map((user) => user.id)
	) + 1;

export class UserUtils {
	static createUser(user: User): CRUDReturnValue {
		user.id = getId();
		data.push(user);
		return {
			success: true,
			message: `User ${user.name} has been added!`,
			data: user,
		};
	}

	static getAllUser(): CRUDReturnValue {
		return {
			success: true,
			message: `All user has been fetch!`,
			data: data,
		};
	}

	static deleteUser(userId: number): CRUDReturnValue {
		const index = data.findIndex((user) => user.id === userId);
		data.splice(index, 1);

		if (index) {
			return {
				success: true,
				message: `User has been deleted!`,
			};
		} else {
			return {
				success: false,
				message: `User did not exist!`,
			};
		}
	}

	static searchUser(query: string): CRUDReturnValue {
		const keyword = query.toLowerCase();
		const filteredData = data.filter(
			(user) =>
				user.name.toLowerCase().includes(keyword) ||
				user.nip.toLowerCase().includes(keyword) ||
				user.email.toLowerCase().includes(keyword)
		);

		return {
			success: true,
			message: `User did not exist!`,
			data: filteredData,
		};
	}
}
