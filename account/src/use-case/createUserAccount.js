import { saveAccount } from "../repositories/accountRepository.js";
import  bcrypt from 'bcryptjs';

export function createUserCase(name, email, password) {
    
    const createdDate = new Date().toISOString().substring(0,10);
    const passHash = bcrypt.hashSync(password, 10);

    const user = {
         name,
         email,
         password: passHash,
         createdDate
    };
    
    saveAccount(user);
    return user;
}