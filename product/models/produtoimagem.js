import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/databaseClient.js';

  export class ProdutoImagem extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  ProdutoImagem.init({
    url: DataTypes.STRING,
    descricao: DataTypes.STRING,
    id_produto: DataTypes.INTEGER
  }, {
    sequelize: client,
    modelName: 'ProdutoImagem',
  });