import {Request , Response} from 'express'

async function getContact(req:Request , res:Response) {
    if(req.cookies.token){
        res.render('contact' , {
            name:req.name
        })
    }
}


export default getContact