import { randomUUID } from 'crypto'; // import gera numero id
import { saveProduct } from '../repositories/productRepository.js'; //salva Produtos

export async function createProductUseCase(produto) {   //função para criar e executar o caso de uso
    const usuarioId = randomUUID();
    const date = new Date();
    const dataFormatada = date.toISOString().substring(0, 10);
    console.log(dataFormatada);
    
    const createProduct = produto    // const criada para salvar o produto
    produto.usuarioId = usuarioId;   //para gerar e imprimir o id
    produto.dataFormatada = dataFormatada;  //gera e imprime a dataformatada

    await saveProduct(createProduct) //promisse para salvar o produto
    return createProduct;


}