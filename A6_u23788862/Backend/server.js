const express = require("express");
const path = require("path");
const {MongoClient} = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const url = process.env.MONGO_URL || "mongodb://mongo:27017/postsdb";

const client = new MongoClient(url);
let db;

async function connect() {
    try{
        await client.connect();
        // db = client.db("postsdb");
        db = client.db("imy_assignment_6");
        console.log("Connected to database");
    }
    catch(err){
        console.error(err);
    }
}

connect();

//Get Posts
app.get('/api/posts', async (req, res) =>{
    try{
        const posts = await db.collection('posts').find({}).toArray();
        res.json(posts);

    }
    catch(err){
        console.error(err);
        res.json({message: "error"});
    }
    
});

//Delete a post
app.delete('/api/posts/:id', async (req, res) => {
    const id = req.params.id;
 

    try  {
        const result = await db.collection('posts').deleteOne({id: id});
         res.json(result);
    }
    catch(err){
        console.error(err);
        res.json({message: "error"});
    }
});

//Update a post
app.put('/api/posts/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;

    try{
        const result = await db.collection('posts').updateOne({id: id} , {$set: post});
        res.json(result);
    }
    catch(err){
        console.error(err);
        res.json({message: "error"});
    }
});

// Update a comment within a post
app.put('/api/posts/:id/comments/:commentIndex', async (req, res) => {
    const { id, commentIndex } = req.params;
    const { comment } = req.body; 

    try {
        const result = await db.collection('posts').updateOne(
            { id: id },
            { $set: { [`comments.${commentIndex}.comment`]: comment } } 
        );
        res.json(result);
    } catch (err) {
        console.error(err);
        res.json({ message: "error" });
    }
});



//app.use(express.static("frontend/public"));
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));

app.get('*', (req, res) => {
    // res.sendFile(indexPath);
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
}).on('close', async () => {

    //Disconnect
    await client.close();
    console.log('MongoDB connection closed');
});
