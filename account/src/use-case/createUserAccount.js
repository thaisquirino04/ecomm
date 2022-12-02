import { saveAccount } from "../repositories/accountRepository.js"; // importa o accountRepositories para salvar a conta "saveAccount"

export async function createUserCase(nome, email, senha) {   // função async = assicrona o que acontece por trás. E cria o createUserCase

    const data = new Date();
    let dataAtualFormatada = data.toISOString().substring(0, 10); // gera a data de criação do registro em formato americano

    const user = {   // const user parametros = dados a serem passados para conta
        name: nome,
        email: email,
        password: senha,
        createDate: dataAtualFormatada,
    }

    saveAccount(user);  // Salva a conta com os parametro ppassados dento do "user"
}
