import { createUserCase } from "../use-case/createUserAccount.js"; // importa o createUserCase que está no arquivo createUserAccount

const user1 = createUserCase("Thais", "thais@gmail.com", "080114");
const user2 = createUserCase("Laura", "lauras@gmail.com", "040294"); // coloca os dados dentro do createUserCase para fazer o teste no terminal

console.log(user1, user2); // imprime os dados de user = passado no createUserCase