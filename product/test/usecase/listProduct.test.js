import { listProdutos } from "../../src/usecase/listProducts.test.js";
import { productExample } from "./data/products.js";
import { createProductUseCase } from "../../usecase/createProductUseCase.js";

const emptyProductList = await listProdutos();
console.log("emptyProductList", emptyProductList);

/** Imprime product depois de cadastrar algum produto */
await createProductUseCase(productExample);
const productList = await listProdutos();
console.log("productList", JSON.stringify(productList, undefined, 2));