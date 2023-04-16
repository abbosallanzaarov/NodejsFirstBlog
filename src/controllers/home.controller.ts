import {Request , Response} from 'express'

async function getHome(req:Request , res:Response) {




    res.render('index' , {
        name: req.name,
        email:req.email
    })
}


export default getHome