import { Model, DataTypes } from 'sequelize';
import client from '../../src/repositories/databaseClient.js';

  export class Product extends Model {

    static associate(models) {
      // define association here
    }
  }
  Product.init({
    nome: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER,
    descricao: DataTypes.TEXT,
    categoria: DataTypes.STRING,
    id_usuario: DataTypes.UUID
  }, 
  { sequelize: client, modelName: 'Product'}
  
  );