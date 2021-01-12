//COMPONENT IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './main/Calculator'

//CSS IMPORTS
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <main>
      <h1>Calculadora</h1>
      <Calculator />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
