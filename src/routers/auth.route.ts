import { Router } from "express";
import { signin, signup, register, login } from '../controllers/auth.controller';

const router  = Router()
router.get('/signin' , signin)
router.get("/signup" , signup)
router.post('/register' ,register)
router.post('/login' ,login)




export default router