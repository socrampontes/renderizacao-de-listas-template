import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaTarefas, setlistaTarefas] = useState([
    "trabalhar",
    "estudar",
    "repetir",
  ]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista=[...listaTarefas,novaTarefa]
    setlistaTarefas(novaLista)
    setNovaTarefa("")
    };




  const removeTarefa = (tarefaRemovida, indice) => {
    
   const novaLista = listaTarefas.filter((tarefa , i)=>{
     if(i !==indice){
      return tarefa;
    }  

    return tarefa !==tarefaRemovida 
  });
  setlistaTarefas(novaLista)
//setlistaTarefas(listaTarefas.filter((tarefa, i)=> i !== indice));

  };

  const tarefas = listaTarefas.map((tarefa, indice) => {
    return (
      <Tarefa key={indice}>
        <p>{tarefa}</p>
        <RemoveButton onClick={()=>removeTarefa(tarefa,indice)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{tarefas}
        {/* {tarefas = listaTarefas.map((tarefa) => {
    return (
      <Tarefa>
        <p>{tarefa}</p>
        <RemoveButton>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  })} */}
        </ul>

      </ListaContainer>
    </ListaTarefasContainer>
  );
}
