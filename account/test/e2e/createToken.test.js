import request from 'supertest';

import { app } from '../../src/app.js';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';
import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

describe('Account Creation', () => {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });

    it('should generate a token given correct account data', async () => {
        await createUserUseCase('Pablo', 'pablo@mail.com', '567891011');
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'pablo@mail.com', password: '567891011' })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({ token: expect.any(String) });
            })
    });

    it('should not generate a token given incorrect password account', async () => {
        await createUserUseCase('Pablo', 'pablo@mail.com', '567891011');
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'pablo@mail.com', password: '5678910111' })
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'user e-mail or password incorrect' });
            })
    })

    it('should not generate a token given incorrect email account', async () => {
        await createUserUseCase('Pablo', 'pablo@mail.com', '5678');
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'pablom@maill.com', password: '5678' })
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'user e-mail or password incorrect' });
            })
    });

    it('should not generate a token given incorrect email account', async () => {
        await request(app)
            .post('/tokens')
            .set('Content-Type', 'application/json')
            .set('Accetp', 'application/json')
            .send({ email: 'pablo@mail.com', password: '5678' })
            .expect(401)
            .expect(({ body }) => {
                expect(body).toEqual({ message: 'user e-mail or password incorrect' });
            })
    })

});