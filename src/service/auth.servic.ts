import { Users } from "@prisma/client";
import client from "./client";

export async function findUser(email: string): Promise<Users | null> {
    return await client.users.findUnique({
        where: {
            email: email
        }
    })
}
export async function createUser(user: Users): Promise<Users> {
    return await client.users.create({
        data: {
            name: user.name,
            email: user.email,
            data: user.data,
            month: user.month,
            year: user.year,
            password: user.password,
            phone: user.phone
        }
    })
}