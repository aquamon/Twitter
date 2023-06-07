const express = require('express');
const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository')

const app = express();

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Server started at Port : ${PORT}`);

    await connect();

    console.log('Mongo Db Connected');

    // const tweet = await Tweet.create({
    //     content : 'Third Tweet',
    //     userEmail : 'a@b.com'
    // });

    // const tweet = await Tweet.find({userEmail : 'a@b.com'});

    // const tweet = await Tweet.findById('647856e0a44964b67ca29684');

    // tweet.userEmail = 'asssb@c.com';

    // tweet.save();

    // console.log(typeof(tweet));

    const tweetRepo = new TweetRepository();

    // const tweet = await tweetRepo.get('647857483b95dc3823488ea1');
    
    // const tweet = await tweetRepo.update('647857483b95dc3823488ea1',{content : 'New latest content here'});

    // const tweet = await tweetRepo.update('647857483b95dc3823488ea1',{content : 'Now Ill be returned aasssaqs'});

    const tweet = await tweetRepo.create({content : 'Tweet with comments'});
    console.log(tweet);
    tweet.comments.push({content : 'First Comment'});
    tweet.save();
    console.log(tweet);






}); 