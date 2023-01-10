import { Produtos } from '../../db/models/produtos.js';

export async function saveProduct(produto) {
    const criaProdutos = await Produtos.create(produto);
    await criaProdutos.save();
    return criaProdutos;
}

export async function findProduct () {
    const allProduct = await Produtos.findAll();
    return allProduct;
}