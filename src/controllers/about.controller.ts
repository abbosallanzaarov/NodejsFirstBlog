import { Request, Response } from 'express'

async function getAbout(req: Request, res: Response) {
    if (req.cookies.token) {
        res.render('about', {
            name: req.name
        })
    }
}


export default getAbout