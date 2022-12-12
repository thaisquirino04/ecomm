import { findProduct } from "../repositories/productRepository.js";

export function listProducts() {
    const products = findProduct()

    return products
}