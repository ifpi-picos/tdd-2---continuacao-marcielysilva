const request = require('supertest');
const app = require('../src/app');

describe('Testes da API de Tarefas', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('POST /tarefas - Deve adicionar uma nova tarefa', async () => {
    const response = await request(server)
      .post('/tarefas')
      .send({ descricao: 'Tarefa 1' });

    expect(response.status).toBe(201);
    expect(response.text).toBe('Tarefa adicionada com sucesso!');
  });
  test('GET /tarefas - Deve retornar todas as tarefas', async () => {
    const response = await request(server).get('/tarefas');
    expect(response.status).toBe(200);
    expect(response.body).toContainEqual({"concluida": false, "descricao": "Tarefa 1"});
  });  
  test('PATCH /tarefas/:indice - Deve marcar uma tarefa como concluída', async () => {
    const response = await request(server).patch('/tarefas/0');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Tarefa marcada como concluída!');
  });
  test('DELETE /tarefas/:indice - Deve remover uma tarefa', async () => {
    const response = await request(server).delete('/tarefas/0');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Tarefa removida com sucesso!');
  });




});
