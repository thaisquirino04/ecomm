import { createProductUseCase } from "../../usecase/createProductUseCase.js";

const produto = {
    nome: 'Consórcio',
    valor: 500,
    quantidade: 1,
    descricao: 'Mude de vida, saia do aluguel sem burocrácia',
    categoria: 'Consórcios',
    caracteristicas: [
        {
            nome: 'Produto bancário',
            descricao: 'Consórcios',
        }
    ],
    imagens: [
        {
            url: 'https://www.canva.com/design/DAFT_oaKJpc/view',
            descricao: 'Imagem Consórcio',
        }
    ],

}

const resultado = await createProductUseCase(produto);
console.log(resultado);