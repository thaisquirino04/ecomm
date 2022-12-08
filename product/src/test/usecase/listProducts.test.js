import { listProdutos } from "../../src/usecase/listProducts.test.js";


const productlist = await listProdutos();
console.log("Produto: ", productlist);

