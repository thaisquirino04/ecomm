const produtos = [] // Array global para salvar todos os produtos

export async function saveProduct(produto) {    //função que recebe como parametro e insere no array função async pois futuramente será acessado no banco de dados.
    produtos.push(produto)
    return produtos

}

export async function findProducts() {
    return listProdutos;
}