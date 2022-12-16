const products = []
export async function saveProduct(produto) {
    products.push(produto)
    return products
}
export async function findProduct () {
    const listProducts = products;
    return listProducts;
}