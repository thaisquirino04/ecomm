import { MongoClient } from 'mongodb';



async function saveAccountConnect() {

    const connectionURL = 'mongodb://mongouser:mongopass@account_db:27017';

    const connection = new MongoClient(connectionURL);

    await connection.connect();



    const saveAccount = connection.db('accounts');

    return saveAccount.collection(user);

}



export async function saveAccount(account) {

    const collection = await saveAccountConnect();

    await collection.insertOne(account);

}