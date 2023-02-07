import request from 'supertest';
import { app } from '../../src/app.js';
import { productExample } from '../data/products.js';
import { cleanProductTable } from "../helpers/help-product.js";
import { generateToken } from "../helpers/token.js";


describe('Criação de produto', () => {

    afterEach(async () => {
        await cleanProductTable();
    });

    it('Cria novo produto', async () => {
        await request(app)
            .post('/products')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${generateToken('id-do-usuario')}`)
            .send(productExample)
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    ...productExample,
                    id: expect.any(Number),
                    id_usuario: 'id-do-usuario',
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    caracteristicas: productExample.caracteristicas.map((caracteristica) => ({
                        ...caracteristica,
                        id: expect.any(Number),
                        id_produto: body.id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })),
                    imagems: productExample.imagems.map((imagem) => ({
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


it('não deve criar um produto quando nenhuma informação de autorização é fornecida', async () => {
    await request(app)
        .post('/products')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(401)
        .expect(({ body }) => {
            expect(body).toEqual({ message: 'authentication required' });
        });
});

it('não deve criar um produto quando as informações de autorização são malformadas', async () => {
    await request(app)
        .post('/products')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', 'header-errado')
        .expect(400)
        .expect(({ body }) => {
            expect(body).toEqual({ message: 'authorization header malformad' });
        });
});

it('não deve criar um produto quando as informações de autorização foram modificadas', async () => {
    const modifiedToken = generateToken('id-usuario') + 'a';
    await request(app)
        .post('/products')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${modifiedToken}`)
        .expect(403)
        .expect(({ body }) => {
            expect(body).toEqual({ message: 'forbidden' });
        });
});

it('não deve criar um produto quando o id do usuário não é válido', async () => {
    await request(app)
        .post('/products')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${generateToken(randomUUID())}`)
        .send({...productExample, descricao: '' })
        .expect(400)
        .expect(({ body }) => {
            expect(body).toEqual([
                {
                    property: 'description',
                    message: expect.any(String)
                }
            ]);
        });
});


