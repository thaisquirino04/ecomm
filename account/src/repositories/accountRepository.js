import { MongoClient } from 'mongodb';
async function saveAccountConnection() {
    const connectionURL = 'mongodb://localhost:27017';
    const connection = new MongoClient(connectionURL);
    await connection.connect();

    const saveAccount = connection.db('accounts');
    return saveAccount.collection('accountCollections');

}
export async function saveAccount(account) {
    const collection = await saveAccountConnection();
    await collection.insertOne(account);
}