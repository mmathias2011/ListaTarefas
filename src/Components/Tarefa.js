import React, { useState} from 'react'
import TarefaForm from './TarefaForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'



const Tarefa = ({tarefas, completeTodo}) => {

    const [ editar, setEditar ] = useState({
        id:null,
        value: ''
    })

    
    return tarefas.map( (tarefa, index) => (
        <div
         className={tarefa.isComplete ? 'tarefa-completa' : 'tarefa-incompleta'} 
         key={index}>

             <div key={tarefa.id} onClick={() => completeTodo(tarefa.id)}>
                 {tarefa.text}
             </div>
             <div className="icons">
                 <RiCloseCircleLine />
                 <TiEdit />
             </div>
        </div>
   ))
}

export default Tarefa
