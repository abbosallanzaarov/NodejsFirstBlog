import jwt from 'jsonwebtoken'

export function generateToken(data:any){
    let token  = jwt.sign(data , 'secret')
    return token
}
export function checkToken(token:any){
    let data:any = jwt.verify(token , 'secret');
    return data
}
