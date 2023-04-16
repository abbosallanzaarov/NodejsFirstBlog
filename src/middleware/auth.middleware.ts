import { checkToken } from "../service/jwt";
import { findUser } from "../service/auth.servic";
import { NextFunction, Request, Response } from "express";

 export async function checkAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies?.token
        
        if (token) {
            let userEmail: string = checkToken(token);
            let userSearch = await findUser(userEmail)
            req.name = userSearch?.name,
            req.email = userSearch?.email,
            req.id = userSearch?.id

        }
        next()
    } catch (err: any) {
        console.log(err);
        
    }
}