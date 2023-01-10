import { createProductUseCase } from './usecase/createProductUseCase.js';
import { Router } from 'express';
import { listProducts } from './usecase/listProduct.js';

const router = Router();

router.post('/products', async (request, response) => {
    const produto = request.body;
    const criaProdutos = await createProductUseCase(produto);
    return response.status(201).json(criaProdutos);
    
});

router.get('/products', async (request, response) => {
    const produtos = await listProducts();
        return response.json(produtos);
});

export { router };