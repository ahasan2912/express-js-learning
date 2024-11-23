const express = require('express');
const phones = require('./phones.json');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) =>{
    res.send("Keybord problem solved, Alhamduliah! Allah");
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    console.log("i need data for id", id);
    const phone = phones.find(phone => phone.id === parseInt(id)) || {};
    res.send(phone);
})

app.listen(port, ()=>{
    console.log("Running Port", port);
})