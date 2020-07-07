const express = require('express');
const app = express();

app.get('*', (req, res) => {
    console.log("Hola");
    res.send({mensaje : "que  corra el deploy"});
})

module.exports = app;