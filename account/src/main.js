import express from 'express';
import { router } from './routes.js';
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./api-docs.json" assert {type: "json"}; ;

const app = express();
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(3000, function () {
    console.log('accounts server is running');

});
