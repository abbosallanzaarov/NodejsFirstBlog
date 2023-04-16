import { Post } from "@prisma/client";
import { Request, Response } from "express";
import { destroyPost, findById, getAllPost, postCreate, update } from "../service/post.servic";
import { checkToken } from '../service/jwt';
import { findUser } from "../service/auth.servic";


export async function allPost(req: Request, res: Response) {
    try {
        let token = req.cookies.token 
        let userEmail = await checkToken(token);
        
        const posts = await getAllPost()
        res.render('profil', {
            posts: posts,
            name: req.name
        })
    } catch (err: any) {
        res.render('addpost', {
            name: req.name
        })
    }
}

export async function createPost(req: Request, res: Response) {
    try {
        const { title, text } = req.body
        if (!title) {
            throw new Error('Title ustunini to\'ldiring')
        }
        if (!text) {
            throw new Error('Decription ustunini to\'ldiring')
        }
        const token = req.cookies.token;
        let userEmail = await checkToken(token)
        let user:any = await findUser(userEmail);
        
        let newpost: Post = {
            id: 0,
            title: title,
            desc: text,
            userId:user.id  
        }
        await postCreate(newpost)
        res.redirect('/profil')
    } catch (err: any) {
        res.render('addpost', {
            error: err + '',
            name: req.name
        })
    }
}

export async function deletePost(req: Request, res: Response) {
    try {
        let destroy = await destroyPost(Number(req.params.id));
        console.log(destroy);
        
        res.redirect('/profil')
    }
    catch (err: any) {
    }
}

export async function updatePage(req: Request, res: Response) {
    try {
        let findPost = await findById(Number(req.params.id))
        res.render('updatapost', {
            name: req.name,
            post: findPost
        })
    } catch (err: any) {
        console.log(err);
    }
}

export async function updatePost(req: Request, res: Response) {
try{

    let post = {
        id:0,
        title:req.body.title,
        desc:req.body.text,
    }
    let newUpdate = await update(Number(req.params.id) , post)
    if(newUpdate) {
        res.redirect("/profil")
    }else {
        res.render('updatapost' , {
            name:req.name , 
             
        })
    }


}catch(err:any){
    console.log(err);
    
}
}