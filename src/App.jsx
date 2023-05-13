import './App.css'
import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import Buttons from './components/Buttons/Buttons'
import ClearButton from './components/ClearButton/ClearButton'
import Screen from './components/Screen/Screen'

function App() {
  const [input, setInput] = useState('')
  const [mensaje, setMensaje] = useState(null)

  const agregarInput = (val) => {
    if ((val === '-' && input === '')
    || (val === '+' && input === '')
    || (val === '*' && input === '')
    || (val === '/' && input === '')) {
      setInput('')
    } else if (input.length >= 9) {
      const puntoDecimal = input.indexOf('.')
      if (puntoDecimal === -1 || (input.length - puntoDecimal) > 9) {
        // Bloquea que se puedan poner números de más de 9 caracteres.
      }
    } else {
      setInput(input + val)
    }
  }

  const calcularResultado = () => {
    if (input) {
      const result = evaluate(input)
      if (result < 0) {
        setInput('ERROR')
      } else if (result > 999999999) {
        setInput('ERROR')
      } else {
        const resultadoRecortado = parseFloat(result.toFixed(7)).toString().slice(0, 9)
        setInput(resultadoRecortado)
      }
    } else {
      setMensaje('Ingresar valores.')
    }
  }

  return (
    <div className="App">

      <div className="calculadora-container">
        <Screen input={input} mensaje={mensaje} />

        <div className="fila">
          <Buttons manejarClick={agregarInput}>1</Buttons>
          <Buttons manejarClick={agregarInput}>2</Buttons>
          <Buttons manejarClick={agregarInput}>3</Buttons>
          <Buttons manejarClick={agregarInput}>+</Buttons>
        </div>

        <div className="fila">
          <Buttons manejarClick={agregarInput}>4</Buttons>
          <Buttons manejarClick={agregarInput}>5</Buttons>
          <Buttons manejarClick={agregarInput}>6</Buttons>
          <Buttons manejarClick={agregarInput}>-</Buttons>
        </div>

        <div className="fila">
          <Buttons manejarClick={agregarInput}>7</Buttons>
          <Buttons manejarClick={agregarInput}>8</Buttons>
          <Buttons manejarClick={agregarInput}>9</Buttons>
          <Buttons manejarClick={agregarInput}>*</Buttons>
        </div>

        <div className="fila">
          <Buttons manejarClick={agregarInput}>.</Buttons>
          <Buttons manejarClick={agregarInput}>0</Buttons>
          <Buttons manejarClick={calcularResultado}>=</Buttons>
          <Buttons manejarClick={agregarInput}>/</Buttons>
        </div>

        <div className="fila">
          <ClearButton manejarClear={() => setInput('')}>Clear</ClearButton>
        </div>

      </div>
    </div>
  )
}

export default App
