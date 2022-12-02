import { createUserCase } from "../src/use-case/createUserAccount.js"; // importa o createUserCase que está no arquivo createUserAccount

const user = createUserCase("Thais", "thais@gmail.com", "08012014"); // coloca os dados dentro do createUserCase para fazer o teste no terminal

console.log(user); // imprime os dados de user = passado no createUserCase