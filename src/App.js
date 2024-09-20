import { FaEdit, FaPlus, FaSave, FaTrashAlt } from "react-icons/fa";
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
    // Filtra a lista de tarefas, mantendo apenas as que não correspondem ao índice a ser removido.
    const novaLista = listaDeTarefas.filter((_, i) => i !== index);
    setListaDeTarefas(novaLista);
  };

  const enterPressionado = (e) => {
    // Detecta se a tecla Enter foi pressionada para adicionar ou salvar uma tarefa
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
      // Cria uma nova lista com a tarefa editada com conteúdo.
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

        <div className="input-container">
          <input
            type="text"
            value={tarefa}
            onChange={atualizaTarefa}
            onKeyDown={enterPressionado}
            placeholder="Digite sua tarefa aqui"
          />

          <button title="adicionar" onClick={adicionarTarefa}>
            <FaPlus />
          </button>
        </div>
        
          <ul>
          <div className="tarefas-container">
            {listaDeTarefas.map((tarefa, index) => (
              <li key={index}>
                {editarIndex === index ? (
                  <div className="input-container">
                    <input
                      type="text"
                      value={novaTarefa}
                      onKeyDown={enterPressionado}
                      onChange={(e) => setNovaTarefa(e.target.value)}
                    />

                    <button title="salvar" onClick={salvarEdicao}>
                      <FaSave />
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="tarefa-texto">{tarefa}</span>
                    <button
                      id="btnEditar"
                      title="editar"
                      onClick={() => iniciarEdicao(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      id="btnDeletar"
                      title="deletar"
                      onClick={() => removerTarefa(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  </>
                )}
              </li>
            ))}
            </div>
          </ul>
        
      </header>
    </div>
  );
}

export default App;
