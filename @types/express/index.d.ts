import { }  from 'express';



declare global {
    namespace Express {
        interface Request {
            name: any,
            email:any,
            id:any
        }
    }
}