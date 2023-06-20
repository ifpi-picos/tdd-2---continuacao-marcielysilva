const express = require('express');

const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/tarefas', (req, res) => {
  const { descricao } = req.body;
  tarefas.adicionar(descricao);
  res.status(201).send('Tarefa adicionada com sucesso!');
});

app.get('/tarefas', (req, res) => {
  res.status(200).json(tarefas.lista);
});

app.patch('/tarefas/:indice', (req, res) => {
  const { indice } = req.params;
  tarefas.marcarConcluida(indice);
  res.status(200).send('Tarefa marcada como concluída!');
});

app.delete('/tarefas/:indice', (req, res) => {
  const { indice } = req.params;
  tarefas.remover(indice);
  res.status(200).send('Tarefa removida com sucesso!');
});

module.exports = app;
