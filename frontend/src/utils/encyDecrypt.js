import { encrypt, decrypt } from 'n-krypta';
const secret = '1098765457';
export const encryptString =(string)=>{
    return encrypt(string,secret)
}
export const decryptString =(string)=>{

    return string ? decrypt(string,secret) :''
}