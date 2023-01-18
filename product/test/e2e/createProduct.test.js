import request from 'supertest';
import { app } from '../../src/app.js';
import { productExample } from '../data/products.js';
import client from '../../src/repositories/databaseClient.js';

describe('Criação de produto', () => { 
    afterAll(async() => {
        await client.close();
      });

    it('Cria novo produto', async () => {
        await request(app) 
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    caracteristicas: productExample.caracteristicas.map((caracteristica) => ({
                        ...caracteristica, 
                        id: expect.any(Number),
                        id_produto: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    imagens: productExample.imagens.map((imagem) => ({
                        ...imagem, 
                        id: expect.any(Number),
                        id_produto: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                });
            });
    });
});


