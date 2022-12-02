import { MongoClient } from 'mongodb'; // Importa a mongoClient do mongodb

async function saveAccountConnect() {                   // Cria função asyc para Salvar a conta no mongodb
    const connectionURL = 'mongodb://localhost:27017';  // Caminho para fazer a conexão com mongodb
    const connection = new MongoClient(connectionURL);  // Faz a conexão com a URL informada.
    await connection.connect();                         // Await faz a função async acontecer conectando mongoClient

    const saveAccountdb = connection.db('accountdb'); // Cria o nome do banco de dados
    return saveAccountdb.collection('accountcollection'); // Cria o nome da collection
}

export async function saveAccount(account) {        // Traz o registro de account para a função saveAccount salvando o registro
    const collection = await saveAccountConnect(); // Conecta o saveAccount ao mongo
    await collection.insertOne(account);          // Insere o arquivo dentro da collection 
}
