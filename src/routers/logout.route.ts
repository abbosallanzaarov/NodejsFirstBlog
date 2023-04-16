import { Router } from "express";
const route = Router()
route.get('/' , (req,res) => {
    res 
        .clearCookie('token')
        .redirect('/')
})

export default route