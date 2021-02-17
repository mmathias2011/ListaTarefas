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
    }

    const updateTarefa = (tarefaId, novoValor) =>{
        if(!novoValor.text || /^\s*$/.test(novoValor.text)) {
            return;
        }

        setTarefas(prev => prev.map(item => ( item.id === tarefaId ? novoValor : item)))
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
           <Tarefa tarefas={tarefas} completeTodo={completeTodo} removerTarefa={removerTarefa}
           updateTarefa={updateTarefa}/>
        </div>
    )
}

export default TarefaLista
