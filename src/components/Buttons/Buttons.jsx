import React from 'react'
import './Buttons.css'

function Buttons(props) {
  const esOperador = (valor) => isNaN(valor) && (valor !== '.') && (valor !== '=')

  return (
    <button
      className={`boton-container ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
      type="button"
    >
      {props.children}
    </button>
  )
}

export default Buttons
