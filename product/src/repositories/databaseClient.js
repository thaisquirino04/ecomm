import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://thais:040294@product_db/product');

export default client;