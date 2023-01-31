import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./api-docs.json" assert {type: "json"};
import client from './repositories/databaseClient.js';
import { app } from './app.js';

const PORT = process.env.PORT_LISTEN;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(PORT, function () {
    console.log('product server is running');

    client.authenticate()
    .then(() => {
        console.log('Db connection OK!') })
    .catch(error => {
        console.error(error)});

});
