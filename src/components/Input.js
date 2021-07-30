import React from 'react'
import './Input.scss'

const Input = ({type, label, placeholder, name, id}) => {
    return (
        <div className="floating-label">
            <input
                className="form-input"
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                autoComplete="off"
            />
            <label htmlFor="name">{label}</label>
        </div>
    )
}

export default Input
