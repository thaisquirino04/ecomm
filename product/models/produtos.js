import { Model, DataTypes } from 'sequelize';
import client from '../src/repositories/databaseClient.js';
import { ProdutoCaracteristica } from './produtocaracteristica.js';
import { ProdutoImagem } from './produtoimagem.js';

  export class Produtos extends Model {

    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nome: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER,
    descricao: DataTypes.TEXT,
    categoria: DataTypes.STRING,
    id_usuario: DataTypes.UUID
  }, 
  { sequelize: client, modelName: 'Produtos', } 
);

Produtos.ProdutoImagem = Produtos.hasMany(ProdutoImagem, {
  foreignKey: 'id_produto',
  as: 'imagens'
});

Produtos.ProdutoCaracteristica = Produtos.hasMany(ProdutoCaracteristica, {
  foreignKey: 'id_produto',
  as: 'caracteristicas'
});

ProdutoImagem.belongsTo(Produtos, {
  foreignKey: 'id',
});

ProdutoCaracteristica.belongsTo(Produtos, {
  foreignKey: 'id',
});