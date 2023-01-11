import { Produtos } from "../../models/produtos.js";

export async function saveProduct(produto) {
    const criaProdutos = await Produtos.create(produto);
    await criaProdutos.save();
    return criaProdutos;
}

export async function findProduct () {
    return [];
}