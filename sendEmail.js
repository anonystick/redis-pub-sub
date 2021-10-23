const express = require('express');
const app = express();

const redis = require('redis');

const subscribe = redis.createClient();

subscribe.subscribe('orderSystem')
subscribe.on('message', (channel, message) => {
    console.log('SendMail to channel ', channel);
    console.log('With Object ', JSON.parse(message));
})

// subscribe.psubscribe('o*')
// subscribe.on('pmessage', (pattern, channel, message) => {
//     console.log('SendMail to channel ', channel);
//     console.log('With Object ', pattern, JSON.parse(message));
// })

app.listen( 3002, () => {
    console.log(`The server is running 3002`);
})