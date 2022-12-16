import { Router } from 'express';
import { createUserCase } from './use-case/createUserAccount.js';
export const router = new Router();
router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    createUserCase(name, email, password)
        .then(createdAccount => {
            delete createdAccount.password;
            response.status(201).json(createdAccount)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});