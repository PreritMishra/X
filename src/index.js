const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
app.listen(3000, async()=> {
    console.log("Servr started");
    await connect();
    console.log("Mongodb connected")
    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    // });
    //const tweets = await Tweet.find({userEmail: 'a@b.com'});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('650ebb7bf40336f3686545eb')
    console.log(tweet);
})