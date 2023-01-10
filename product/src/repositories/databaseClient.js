import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://thais:040294@product_db:3306/product');

export default client;