import { Request, Response } from "express";

export  function addPage(req:Request , res:Response ){
    res.render('addpost' , {
        name:req.name,
        error: 'agar Ustunlarni to\'ldirishda xatolik bolsa bu yerda habar beriladi'
    })
    
}