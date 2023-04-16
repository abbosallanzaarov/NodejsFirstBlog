import { NextFunction, Request, Response } from "express";


export function profiProtection(req:Request , res:Response , next:NextFunction){
    if(!req?.cookies?.token){
        res.redirect('/')
    }
    next()
}
