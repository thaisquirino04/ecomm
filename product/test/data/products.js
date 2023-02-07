import { randomUUID } from 'node:crypto';

export const productExample = {
    nome: 'Consórcio',
    valor: "500",
    quantidade: 1,
    descricao: 'Consórcio é a modalidade de compra baseada na união de pessoas - físicas ou jurídicas - em grupos, com a finalidade de formar poupança para a aquisição de bens móveis, imóveis ou serviços. A formação desses grupos é feita por uma Administradora de Consórcios , autorizada e fiscalizada pelo Banco Central do Brasil. Mude de vida já',
    categoria: 'Consórcios',
    caracteristicas: [
        {
            nome: 'Produto bancário',
            descricao: 'Consórcios',
        }
    ],
    imagems: [
        {
            url: 'https://www.canva.com/design/DAFT_oaKJpc/view',
            descricao: 'Imagem Consórcio',
        }
    ]

};
