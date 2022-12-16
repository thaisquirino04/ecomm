import { Router } from 'express';
import { createUserCase } from './use-case/createUserAccount.js';
import bcrypt from 'bcryptjs';

export const router = new Router();

router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    const encodedPassowrd = bcrypt.hashSync(password, 10);
    console.log(encodedPassowrd)
    createUserCase(name, email, encodedPassowrd)
        .then(createdAccount => {
            //delete createdAccount.password;
            response.status(201).json(createdAccount)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});