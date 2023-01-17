import { Produtos } from "../../models/produtos.js";
import { ProdutoCaracteristica } from "../../models/produtocaracteristica.js";
import { ProdutoImagem } from "../../models/produtoimagem.js";

export async function saveProduct(produto) {
    const criaProdutos = await Produtos.create(produto, {
        include: [
        { association: Produtos.ProdutoCaracteristica, as: 'caracteristicas', },
        { association: Produtos.ProdutoImagem, as: 'imagens'}
    ]
    });
    await criaProdutos.save();
    return criaProdutos;
}

export async function findProduct () {
    const allProdutos = await Produtos.findAll({ include : [
        {
            model: ProdutoCaracteristica,
            as: 'caracteristicas'
        }, {
            model: ProdutoImagem,
            as: 'imagens'
        }]
    });
    return allProdutos;
}