import { findProduct } from "../../src/repositories/productRepository.js";

export async function cleanProductTable() {
  const produtos = await findProduct();
  for await (const produto of produtos) {
    const produtoCaracteristicaDelete = produto.caracteristicas.map( caracteristica => caracteristica.destroy())
    const produtoImagemDelete = produto.imagems.map( imagem => imagem.destroy())
      
       await Promise.all([...produtoCaracteristicaDelete, produtoImagemDelete])
       await produto.destroy();
    }
}