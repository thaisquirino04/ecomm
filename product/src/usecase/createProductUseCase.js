import { saveProduct } from "../repositories/productRepository.js";

export async function createProductUseCase(produto) {
    const salvaProduto = await saveProduct(produto);
    return salvaProduto;
}