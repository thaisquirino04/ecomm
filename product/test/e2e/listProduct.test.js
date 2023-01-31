import { app } from "../../src/app.js";
import request from "supertest";
import { productExample } from "../data/products.js";
import { cleanProductTable } from "../helpers/help-product.js";
import { saveProduct } from "../../src/repositories/productRepository.js";


describe('Lista produtos', () => {

  afterEach(async () => {
      await cleanProductTable();
  })
  it('Deve retornar uma lista vazia de produtos', async () => {
      await request(app)
      .get('/products')
      .expect(200)
      .expect(({body}) => {
          expect(body).toEqual([]);
      });
  })

  it('Deve retornar uma lista de produtos', async () => {
    await saveProduct({...productExample, id_usuario: 'id-do-usuario'});
    await request(app)
        .get('/products')
        .expect(200)
        .expect(({ body }) => {
            expect(body.length).toBe(1);
            expect(body).toEqual(expect.arrayContaining([{
                    ...productExample,
                    id_usuario: 'id-do-usuario',
                    valor: String(productExample.valor),
                    id: expect.any(Number),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    caracteristicas: expect.arrayContaining(productExample.caracteristicas.map(caracteristica => ({
                        ...caracteristica, 
                        id: expect.any(Number),
                        id_produto: body[0].id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    }))),
                    imagems: expect.arrayContaining(productExample.imagems.map(imagem => ({
                        ...imagem, 
                        id: expect.any(Number),
                        id_produto: body[0].id,
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                    })))
                }]));
        });
});
});