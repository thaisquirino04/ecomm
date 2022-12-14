import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://mongouser:mongopass@account_db:27017');
const connection = new MongoClient(connectionURL);

async function getUsersCollection(client) {
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;  
}


export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
   
}

