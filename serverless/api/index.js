const express = require('express');
const mongoose = require('mongoose');
const plates = require ('./routes/plates')
const orders = require ('./routes/Orders')
const app = express();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

app.use('/api/plates', plates);
app.use('/api/orders', orders)

module.exports = app;