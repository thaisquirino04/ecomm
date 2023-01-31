import { createProductUseCase } from './usecase/createProductUseCase.js';
import { Router } from 'express';
import { listProducts } from './usecase/listProduct.js';
import { decriptToken } from './helpers/token.js';

const router = Router();

router.post('/products', async (request, response) => {
    const authotizationHeader = request.headers.authorization;

    if(!authotizationHeader) {
        return response.status(401).json({ message: 'authentication required' })
    }

    const token = authotizationHeader.split(' ')[1];

    if(!token) {
        return response.status(400).json({ message: 'authorization header malformad' });
    }

    const tokenDecripted = decriptToken(token);
    const userId = tokenDecripted.userId;

    if(!userId) {
        return response.status(403).json({ message: 'forbidden' });
    }

    const produto = request.body;
    const criaProdutos = await createProductUseCase(produto, userId);
    
    return response.status(201).json(criaProdutos);
    
});

router.get('/products', async (request, response) => {
    const produtos = await listProducts();
        return response.json(produtos);
});

export { router };
