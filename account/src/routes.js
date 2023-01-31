import { Router } from 'express';
import { createUserCase } from './use-case/createUserAccount.js';


const router = Router();

router.post('/accounts', async (request, response) => {
    const { name, email, password } = request.body;
    const createdUser = await createUserCase(name, email, password);

    return response.status(201).json({
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        createdDate: createdUser.createdDate,
    });
});

export { router };