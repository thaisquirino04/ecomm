import { saveProduct } from "../repositories/productRepository.js";
import joi from "joi";

const produtoValidacao = joi.object({
    nome: joi.string().trim().required(),
    id_usuario: joi.string().trim().required().guid({ version: ['uuidv4']}),
    valor: joi.number().min(0.1).required(),
    quantidade: joi.number().min(1).required(),
    descricao: joi.string().trim().min(200).max(500).required(),
    categoria: joi.string().trim().required(),
    caracteristicas: joi.array().min(3).required().items(
        joi.object({
            name: joi.string().trim().required(),
            description: joi.string().trim().required(),
        })
    ),
    imagems: joi.array().min(3).required().items(
        joi.object({
            url: joi.string().trim().required().uri({ scheme: [/https?/] }),
            description: joi.string().trim().required(),
        })
    ),
})



export async function createProductUseCase(produto, userId) {
    
    const produtoParaSalvar = { ...produto, id_usuario: userId };

    const { error } = produtoValidacao.validate(produtoParaSalvar, { abortEarly: false });

    if(error) {
       return { 
            hasErrors: true, 
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })), 
            produto: produtoParaSalvar,
        }
    }

    const salvaProduto = await saveProduct(produtoParaSalvar);
    
    return{
        hasErrors: false,
        errors: undefined,
        produto: salvaProduto
    };
}
