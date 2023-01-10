import { findProduct } from "../repositories/productRepository.js";

export async function listProducts() {
    const produtos = findProduct();

    return produtos
}