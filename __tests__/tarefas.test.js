const Tarefas = require('../src/tarefas');

test('Adiciona uma tarefa', () => {
  const tarefas = new Tarefas();
  tarefas.adicionar('Comprar pão');
  expect(tarefas.todas()).toEqual([{ descricao: 'Comprar pão', concluida: false }]);
});

test('Remove uma tarefa', () => {
  const tarefas = new Tarefas();
  tarefas.adicionar('Comprar pão');
  tarefas.adicionar('Comprar leite');
  tarefas.remover(1);
  expect(tarefas.todas()).toEqual([{ descricao: 'Comprar pão', concluida: false }]);
});

test('Lista todas as tarefas', () => {
  const tarefas = new Tarefas();
  tarefas.adicionar('Comprar pão');
  tarefas.adicionar('Comprar leite');
  tarefas.adicionar('Fazer exercícios');
  expect(tarefas.todas()).toEqual([
    { descricao: 'Comprar pão', concluida: false },
    { descricao: 'Comprar leite', concluida: false },
    { descricao: 'Fazer exercícios', concluida: false },
  ]);
});

test('Marca uma tarefa como concluída', () => {
  const tarefas = new Tarefas();
  tarefas.adicionar('Comprar pão');
  tarefas.adicionar('Comprar leite');
  tarefas.marcarConcluida(0);
  expect(tarefas.todas()).toEqual([
    { descricao: 'Comprar pão', concluida: true },
    { descricao: 'Comprar leite', concluida: false },
  ]);
});
