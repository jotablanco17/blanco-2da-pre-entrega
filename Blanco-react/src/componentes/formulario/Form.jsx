import { useState } from "react"

const Form = ({ handleOnChange, formData, errors, validateForm }) => {
    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (validateForm()){
            console.log('Enviando datos del form: ',formData)
        }
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text"
                name="name"
                placeholder="ingrese el name"
                value={formData.name}
                onChange={handleOnChange} />

            {errors && errors.name && <span>{errors.name}</span>}

            <input type="text"
                name="email"
                placeholder="ingrese email"
                value={formData.email}
                onChange={handleOnChange} />

            {errors && errors.email && <span>{errors.email}</span>}
            <button className="btn btn-outline-primary">Enviar</button>
        </form>
    )
}

export default Form