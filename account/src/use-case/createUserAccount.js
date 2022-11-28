let contas = []
const data = new Date();
let dataAtualFormatada = data.toISOString().substring(0, 10);

export function createUserCase(nome, email, senha) {

const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createDate: dataAtualFormatada,
}

contas.push(user)
return user
}

createUserCase("Thais", 'thais@gmail.com', '0246810')
createUserCase("Laura", 'laura@gmail.com', '0246812')

console.log("contas:", contas)