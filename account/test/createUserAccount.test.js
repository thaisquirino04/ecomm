import { createUserCase } from "../src/use-case/createUserAccount.js";

const user = createUserCase ("Thais", "thais@gmail.com", "08012014")

console.log(user)