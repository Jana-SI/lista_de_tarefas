import "./App.css";
import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [editarIndex, setEditarIndex] = useState(null);
  const [novaTarefa, setNovaTarefa] = useState("");

  const atualizaTarefa = (e) => {
    setTarefa(e.target.value);
  };

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setListaDeTarefas([tarefa, ...listaDeTarefas]);
      setTarefa("");
    }
  };

  const removerTarefa = (index) => {
    const novaLista = listaDeTarefas.filter((_, i) => i !== index);
    setListaDeTarefas(novaLista);
  };

  const enterPressionado = (e) => {
    if (e.key === "Enter") {
      adicionarTarefa();
      salvarEdicao();
    }
  };

  const iniciarEdicao = (index) => {
    setEditarIndex(index);
    setNovaTarefa(listaDeTarefas[index]);
  };

  const salvarEdicao = () => {
    if (novaTarefa.trim() !== "") {
      const novaLista = listaDeTarefas.map((tarefa, i) =>
        i === editarIndex ? novaTarefa : tarefa
      );

      setListaDeTarefas(novaLista);
      setEditarIndex(null);
      setNovaTarefa("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>

        <input
          type="text"
          value={tarefa}
          onChange={atualizaTarefa}
          onKeyDown={enterPressionado}
          placeholder="Digite sua tarefa aqui"
        />

        <button onClick={adicionarTarefa}>Adicionar</button>

        <ul>
          {listaDeTarefas.map((tarefa, index) => (
            <li key={index}>
              {editarIndex === index ? (
                <>
                  <input
                    type="text"
                    value={novaTarefa}
                    onKeyDown={enterPressionado}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                  />

                  <button onClick={salvarEdicao}>Salvar</button>
                </>
              ) : (
                <>
                  {tarefa}
                  <button onClick={() => iniciarEdicao(index)}>Editar</button>
                  <button onClick={() => removerTarefa(index)}>X</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
