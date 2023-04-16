import {Request , Response} from 'express'
import { findById } from '../service/post.servic';
import { Post } from '@prisma/client';
import { type } from 'os';

async function profilPage(req:Request , res:Response) {
try{

    

    res.render('profil' , {
        name:req.name,
        email:req.email
    })
}
catch(err:any){
    console.log(err);
    
}



}


export default profilPage