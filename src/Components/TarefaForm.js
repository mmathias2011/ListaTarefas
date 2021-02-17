import React, { useState, useEffect, useRef } from 'react'

const TarefaForm = (props) => {

    const [ input, setInput ] = useState(props.editar ? props.editar.value: '');

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
            {props.editar ? 
            (
                <>
                <input
                className="tarefa-input edit"
                type="text" 
                placeholder="Editar tarfefa" 
                value={input} 
                name="text"
                onChange={handleChange} 
                ref={inputRef} />
                <button className="tarefa-button edit"> Editar tarefa</button></>) : 
            (
                <>
                <input
                className="tarefa-input"
                type="text" 
                placeholder="Adicionar uma tarfefa" 
                value={input} 
                name="text"
                onChange={handleChange} 
                ref={inputRef} />
                <button className="tarefa-button"> Adicionar tarefa</button></>
            )}
            
        </form>
    )
}

export default TarefaForm
