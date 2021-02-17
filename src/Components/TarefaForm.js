import React, { useState } from 'react'

const TarefaForm = () => {

    const [ input, setInput ] = useState('')

    return (
        <form className="tarefa-form">

            <input
             className="tarefa-input"
             type="text" 
             placeholder="Adicionar uma tarfefa" 
             value={input} 
             name="text" />
             <button className="tarefa-button"> Adicionar tarefa</button>
        </form>
    )
}

export default TarefaForm
