import { hashPassword } from '../helpers/password.js';
import { saveAccount } from '../repositories/accountRepository.js';
import { existsAccountByEmail } from '../repositories/accountRepository.js';

export async function createUserUseCase(name, email, password) {

    const accountAlreadyExists = await existsAccountByEmail(email);
    
    if(accountAlreadyExists) {
        console.error('Account already exists', email);
        throw new Error('Account already exists');
    }
    
    const createdDate = new Date().toISOString().substring(0, 10);
    const hashedPassword = await hashPassword(password);
    const user = {
        name, 
        email,
        password: hashedPassword,
        createdDate
    };

    await saveAccount(user);
    return user;
}