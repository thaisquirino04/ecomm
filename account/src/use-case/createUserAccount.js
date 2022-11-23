let contas = []

export function createUserCase(nome, email, senha) {

    function dataAtualFormatada(){
        var data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'),
            ano  = data.getFullYear();
        return dia+"/"+mes+"/"+ano;
    }

const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createDate: dataAtualFormatada(),
}


contas.push(user)
return user
}

createUserCase("Thais", 'thais@gmail.com', '0246810')
createUserCase("Laura", 'laura@gmail.com', '0246812')

console.log("contas:", contas)