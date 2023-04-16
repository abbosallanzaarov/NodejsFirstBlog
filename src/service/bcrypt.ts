import bcrypt  from 'bcrypt'

export  async function generateHash(data:any){
    let salt = await bcrypt.genSalt(10)
    let crypt = await bcrypt.hash(data , salt);
    return crypt
}
export async function confirmHash(data:any , hash:any){
    return await bcrypt.compare(data , hash)
}