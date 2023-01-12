import { Model, DataTypes} from 'sequelize';
import client from '../src/repositories/databaseClient.js';

  export class ProdutoCaracteristica extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  ProdutoCaracteristica.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    id_produto: DataTypes.INTEGER
  }, {
    sequelize: client,
    modelName: 'ProdutoCaracteristica',
  });
 
