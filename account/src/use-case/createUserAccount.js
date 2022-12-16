import { saveAccount } from "../repositories/accountRepository.js";

export async function createUserCase(name, email, password) {    //dados da conta para salvar
    const createDate = new Date().toISOString().substring(0, 10);   // data criação da conta para salvar

    const user = {
        name, 
        email,
        password,
        createDate
    };

    await saveAccount(user); //salvar e retornar a conta
    return user; 
}
