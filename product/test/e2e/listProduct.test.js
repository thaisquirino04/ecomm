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
      await saveProduct(productExample)
      await request(app)
      .get('/products')
      .expect(200)
      .expect(({body}) => {
          expect(body).toEqual([{
              ...productExample,
              id: expect.any(Number),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              caracteristicas: productExample.caracteristicas.map(caracteristica => ({
                  ...caracteristica,
                  createdAt: expect.any(String),
                  id_produto: body[0].id,
                  updatedAt: expect.any(String),
                  id: expect.any(Number),
              })),
              imagems: productExample.imagems.map(imagem => ({
                  ...imagem,
                  createdAt: expect.any(String),
                  id: body[0].id,
                  id_produto: expect.any(Number),
                  updatedAt: expect.any(String)
              }))
          }])
      })
  })
})