import client from "./client";
import { Post, Users } from '@prisma/client';

export async function getAllPost(): Promise<Post[]>{
    return client.post.findMany()
}
export async function postCreate(post:Post): Promise<Post> {
    return await client.post.create({
        data: {
            title:post.title,
            desc:post.desc,
            userId:post.userId
        }
    })
}

export async function destroyPost(id:number) : Promise<Post> {
    return await client.post.delete({
        where: {
            id: id
        }
    })
}
export async function update(id:number , post:any) : Promise<Post> {
    return await client.post.update({
        where: {
            id: id
        },
        data: {
            title:post.title,
            desc: post.desc
        }
    })
}

export async function findById(id:number) : Promise<Post | null> {
    return await client.post.findFirst({
        where: {
            id:id
        }
    })
}
export  async function   findUserPosts(id:number):Promise<Post[]> {
    return client.post.findMany({
        where: {
            userId:id
        }
    })
}