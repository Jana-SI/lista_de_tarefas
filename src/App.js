import './App.css';
import { useState } from 'react';

function App() {

    const [tarefa, setTarefa] = useState();
    const [listaDeTarefas, setListaDeTarefas] = useState([]);

    const atualizaTarefa = (e) => {
     setTarefa(e.target.value);
    };

    const adicionarTarefa = () => {
      if(tarefa.trim() !== ''){
        setListaDeTarefas([tarefa, ...listaDeTarefas]);
        setTarefa('');
      }
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>

        <input type='text' value={tarefa} onChange={atualizaTarefa} placeholder='Digite sua tarefa aqui'/>

        <button onClick={adicionarTarefa}>Adicionar</button>

        <ul>
          {listaDeTarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;