import { MongoClient } from 'mongodb'; // Importa a mongoClient do mongodb

async function getAccountCollection() {                 // Cria função asyc getAccountCollection para Salvar a conta no mongodb
    const connectionURL = 'mongodb://localhost:27017';  // Caminho para fazer a conexão com mongodb
    const connection = new MongoClient(connectionURL);  // Faz a conexão com a URL informada.
    await connection.connect();                         // Await faz a função async acontecer conectando mongoClient

    const saveAccountdb = connection.db('accountdb'); // Cria o nome do banco de dados
    return saveAccountdb.collection('accountcollection'); // Cria o nome da collection
}

export async function saveAccount(account) {        // Criando a função save Account
    const collection = await getAccountCollection(); // Conecta o saveAccount
    await collection.insertOne(account);          // Insere o arquivo dentro da collection 
}
