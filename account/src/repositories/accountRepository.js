import { MongoClient } from 'mongodb';


const connectionURL = 'mongodb://mongouser:1234@account-database:27017';
const connection = new MongoClient(connectionURL);
async function getUsersCollection() {
    await connection.connect();
    const database = connection.db('accounts')
    return database.collection('users');
}
export async function saveAccount(account) {
    try {
        const collection = await getUsersCollection();
        await collection.insertOne(account);
    } catch (error) {
        console.error("unsaved account =======", error.message.stack);
    
    }

}