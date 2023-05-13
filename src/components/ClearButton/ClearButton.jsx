import React from 'react'
import './ClearButton.css'

function ClearButton(props) {
  return (
    <div className="clear-boton" onClick={props.manejarClear}>
      {props.children}
    </div>
  )
}

export default ClearButton
