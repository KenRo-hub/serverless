const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(process.env.MONGODB_URI)

const Users = mongoose.model('User', new mongoose.Schema({name : String}, { useUnifiedTopology: true }, { useNewUrlParser: true })
)

Users.create({ name : 'Chanchito feliz'})

app.get('*', (req, res) => {
   Users.find()
   .then(x => res.send(x))
})

module.exports = app;