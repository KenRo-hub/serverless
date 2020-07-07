const express = require('express');
const app = express();

app.get('*', (req, res) => {
    console.log("Hola mundo! Primera aplicación serverless");
    res.send({mensaje : "ya corrio :,v"});
})

module.exports = app;