const express = require('express');
const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', (req, res) => {

});

app.delete('/tarefas/:indice', (req, res) => {

});

app.get('/tarefas', (req, res) => {

});

app.patch('/tarefas/:indice', (req, res) => {

});

module.exports = app;
