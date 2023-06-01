const express = require('express');
const connect = require('./config/database');

const Tweet = require('./models/tweet')

const app = express();

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Server started at Port : ${PORT}`);

    await connect();

    console.log('Mongo Db Connected');

    const tweet = await Tweet.create({
        content : 'First Tweet',
        userEmail : 'a@b.com'
    });

    console.log(tweet);

}); 