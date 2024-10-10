//Corne de Lange u23788862
const {MongoClient} = require ('mongodb');

const url = "mongodb+srv://Cornedl:Corne%40mongo@imy220.5pexm.mongodb.net/?retryWrites=true&w=majority&appName=IMY220"

const client = new MongoClient(url);

async function main() {
    try{
        await client.connect();
        console.info("Connected to Mongodb");

        const db = client.db("DBExample"); //Select DATABASE
        const collection = db.collection("events"); //Select Collection

        const query = await collection.find({"locations": {
            $elemMatch: {
                "area" : "Brooklyn",
                "capacity": {$gt:20},
                "date": {$gt: "2022/10/08", $lt: "2022/10/26"}
        }}}).project({
            "name": 1,
            "description": 1,
            "_id": 0

        }).toArray();

        
        console.log(query);

    }
    catch(e){

    }finally {
        await client.close();
    }
}

main().catch(console.error);