import React, { useState, useEffect, useRef } from 'react'

const TarefaForm = (props) => {

    const [ input, setInput ] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <form className="tarefa-form" onSubmit={handleSubmit}>

            <input
             className="tarefa-input"
             type="text" 
             placeholder="Adicionar uma tarfefa" 
             value={input} 
             name="text"
             onChange={handleChange} 
             ref={inputRef} />
             <button className="tarefa-button"> Adicionar tarefa</button>
        </form>
    )
}

export default TarefaForm
