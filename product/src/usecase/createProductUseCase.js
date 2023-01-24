import { saveProduct } from "../repositories/productRepository.js";

export async function createProductUseCase(produto, userId) {
    const salvaProduto = await saveProduct({ ...produto, id_usuario: userId });
    return salvaProduto;
}