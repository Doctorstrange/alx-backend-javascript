const express = require('express');
const app = express();

const PORT = 7865;

const idRegex = /^\d+$/;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (!id.match(idRegex)) {
        return res.status(404).send('Invalid cart ID. Please provide a valid number.');
    }
    res.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;