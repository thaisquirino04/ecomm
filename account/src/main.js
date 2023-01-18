import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./api-docs.json" assert {type: "json"}; 
import { app } from './app.js';

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3000, function () {
    console.log('accounts server is running');

});
