const express = require('express');
const app = express();

const redis = require('redis');

const publish = redis.createClient();

app.get('/', (req, res) => {
    const order = {
        userId: 1,
        products: [
            {
                productId: 1,
                price: 1000,
            },
            {
                productId: 2,
                price: 2000,
            }
        ]
    }
    publish.publish('orderSystem', JSON.stringify(order))
    //publish to service Payment.js and sendEmail.js

    res.json({
        status: 'success',
        message: "order success!"
    })
})

app.listen( 3000, () => {
    console.log(`The server is running 3000`);
})