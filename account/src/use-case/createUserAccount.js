import { randomUUID } from 'crypto';
import { saveAccount } from "../repositories/accountRepository.js";
import  bcrypt from 'bcryptjs';

export async function createUserCase(name, email, password) {
    
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0,10);
    const passHash = bcrypt.hashSync(password, 10);

    const user = {
        id,
         name,
         email,
         password: passHash,
         createdDate
    };
    
    saveAccount(user);
    return user;
}