const products = []

export async function saveProduct(produto) {
    products.push(produto)
    
}
export async function findProduct () {
    
    return products
}