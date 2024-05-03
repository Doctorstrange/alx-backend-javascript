const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 7865;

app.use(bodyParser.json());

const availablePayments = {
    payment_methods: {
        credit_cards: true,
        paypal: false
    }
};

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
    res.json(availablePayments);
});

app.post('/login', (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;