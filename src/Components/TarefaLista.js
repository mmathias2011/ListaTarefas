import React, { useState } from 'react'
import Tarefa from './Tarefa';
import TarefaForm from './TarefaForm';


const TarefaLista = () => {
    const [ tarefas, setTarefas ] = useState([]);

    const addTarefa = tarefa => {
        if(!tarefa.text || /^\s*$/.test(tarefa.text)) {
            return;
        }

        const novaTarefa = [tarefa, ...tarefas];

        setTarefas(novaTarefa)
        console.log(...tarefas)
    }

    const removerTarefa = id => {
        const removeArr = [...tarefas].filter(tarefa => tarefa.id !== id )

        setTarefas(removeArr);
    }

    const completeTodo = id => {
        let updateTarefas = tarefas.map( tarefa => {
            if(tarefa.id ===id ) {
                tarefa.isComplete = !tarefa.isComplete;
            }
            return tarefa;
        });
    }

    return (
        <div>
           <h1>Quais são seus planos para hoje?</h1>
           <TarefaForm onSubmit={addTarefa} />
           <Tarefa tarefas={tarefas} completeTodo={completeTodo} removerTarefa={removerTarefa}/>
        </div>
    )
}

export default TarefaLista
