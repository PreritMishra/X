const express = require('express');
const connect = require('./config/database');
const app = express();

const {TweetRepository} = require('./repository/index');
const TweetService = require('./services/tweet-service');

app.listen(3000, async()=> {
    console.log("Servr started");
    await connect();
    console.log("Mongodb connected");
    let service = new TweetService();
    const tweet = await service.create({content: 'Is #X working?'});
    console.log(tweet);
});