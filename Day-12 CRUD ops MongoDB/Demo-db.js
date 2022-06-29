const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb://localhost:27017/demo-db";

    const client = new MongoClient(uri);
    try{
        await client.connect();
    }
    catch(err){
        throw err;
    } finally {
        await client.close();
    }
}

main().catch(console.error);