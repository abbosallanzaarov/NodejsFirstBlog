import { Request, Response } from 'express';
import { createUser, findUser } from '../service/auth.servic';
import { Users } from '@prisma/client';
import { confirmHash, generateHash } from '../service/bcrypt';
import { generateToken } from '../service/jwt';

export async function signin(req: Request, res: Response) {
    try {
        res.render('signin', { error: "" , name:req.name })
    } catch (err: any) {
        res.render('signin', { error: "gachchi" , name:req.name })
    }

}
export async function signup(req: Request, res: Response) {
    try {
        res.render('signup', { error: 'Error Lardan Saqlaning va Barcha ustunlarni to\'ldiring iltimos' })

    } catch (error: any) {
        res.render('signup', { error: "gachchi" })

    }
}

export async function register(req: Request, res: Response) {
    try {

        const { name, email, data, month, year, password, phone } = req.body
        if (!(name && email && data && month && year && password && phone)) {
            throw new Error("Hamma ustunlarni to'ldiring iltimos!!!")
        }
        let findUserEmailOr = await findUser(email)
        if (findUserEmailOr) {
            throw new Error('This name already taken')
        }

        if (password.length < 5) {
            throw new Error('Password must at leart five Charaschet')
        }
        let user:Users = {
            id:0,
            name: name,
            email: email,
            data: Number(data),
            year: Number(year),
            month: month,
            password: await generateHash(password),
            phone: phone
        }
       await createUser(user)
        res.redirect('/auth/signin' )

    } catch (error: any) {

        res.render('signup', {
            error: error,
            name:req.name
        })
    }
}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            throw new Error('iltimos ustunlarni to\'ldiring ')
        }
        let findUseremail = await findUser(email)
        if (!findUseremail) {
            throw new Error('email or password not Found!')
        }
        const confrimHashPassword = await confirmHash(password , findUseremail.password);

        if (confrimHashPassword == false) {
            throw new Error('password or email not Found')
        }
        const token = generateToken(findUseremail.email)
        
        res.cookie('token',  token).redirect('/profil')

    } catch (err: any) {
        res.render('signin', {
            error: err,
            name:req.name
        })
    }

}

