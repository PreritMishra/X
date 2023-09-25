const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async()=> {
    console.log("Servr started");
    await connect();
    console.log("Mongodb connected");
    const tweets = await Tweet.find({
        content: ["First Tweet", "Third Tweet", "123m4"]
    });
    console.log(tweets); 
});