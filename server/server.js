'use strict';
const express = require('express');
const app = express();
const request = require('request');
const path = require('path');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const eventCtrl = require('./controller/controller.js');

const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://alexhong742:3edd19f7@alexhongcalendar.0n74s.mongodb.net/alexhongcalendar?retryWrites=true&w=majority");

mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});
app.use(bodyParse());
app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


app.post('/', eventCtrl.create);
app.get('/schedule', eventCtrl.getData);
app.delete('/:identifier', eventCtrl.delete);
app.patch('/:identifier', eventCtrl.patch);
//let the server know where to send requests from certain routes

app.listen(port, () => {
    console.log(`now listening on ${port}!`);
});
