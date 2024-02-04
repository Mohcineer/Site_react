const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    return res.json("Salut alexander")
});

app.get('/mohcine', (req, res) => {
    
    return res.json("Salut mohcine")
});


app.listen(8081, () => {
    console.log("listening");

});


