import React from 'react'
import '../style/Button.css'

function Button(props) {

    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return (
        <div
            className={`button-container ${isOperator(props.children) ? 'operator' : ''}`}>
            {props.children}
        </div>
    )
}

export default Button
