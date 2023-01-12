import { randomUUID } from 'node:crypto';

export const productExample = {
    usuarioId: randomUUID(),
    nome: 'Consórcio',
    valor: 500.00,
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
