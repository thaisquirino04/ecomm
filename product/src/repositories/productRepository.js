import { Product } from "../../db/models/product.js";

export async function saveProduct(produto) {
    const criaProduct = await Product.create(produto);
    await criaProduct.save();
    return criaProduct;
}

export async function findProduct () {
    return [];
}