import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://root@localhost:3306/product');

export default client;