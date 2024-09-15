import './App.css';
import { useState } from 'react';

function App() {

    const [tarefa, settarefa] = useState();
    const atualizaTarefa = (e) => {
      settarefa(e.target.value);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        
        <input type='text' value={tarefa} onChange={atualizaTarefa} placeholder='Digite sua tarefa aqui'/>

        <p>Você digitou: {tarefa}</p>
      </header>
    </div>
  );
}

export default App;