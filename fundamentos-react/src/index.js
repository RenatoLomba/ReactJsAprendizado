import './index.css' //IMPORTA O CSS DA MESMA PASTA
import ReactDOM from 'react-dom' //IMPORTA O REACT DOM PARA RENDERIZAR ELEMENTOS NA PÁGINA
import React from 'react' //IMPORTA O REACT

//ARQUIVO PRINCIPAL DA APLICAÇÃO
import App from './App'

const rootElement = document.getElementById('root') //PEGA O ELEMENTO ROOT DO BODY
//const negrito = <strong>Hello World!!!</strong> //JOGA UM ELEMENTO HTML PARA UMA CONSTANTE

//RENDERIZA O CONTEÚDO DENTRO DO ELEMENTO ROOT
ReactDOM.render(
    <>
        <App></App>
    </>,
    rootElement
)
