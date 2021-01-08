import './index.css' //IMPORTA O CSS DA MESMA PASTA
import ReactDOM from 'react-dom' //IMPORTA O REACT DOM PARA RENDERIZAR ELEMENTOS NA PÁGINA
import React from 'react' //IMPORTA O REACT

import PrimeiroComponente from './components/basicos/PrimeiroComponente' //IMPORTA A FUNÇÃO PRIMEIRO QUE ESTÁ NO ARQUIVO PrimeiroComponente.js
import CompParametro from './components/basicos/CompParametro'
import Fragmentos from "./components/basicos/Fragmentos";

const rootElement = document.getElementById('root') //PEGA O ELEMENTO ROOT DO BODY
//const negrito = <strong>Hello World!!!</strong> //JOGA UM ELEMENTO HTML PARA UMA CONSTANTE

//RENDERIZA O CONTEÚDO DENTRO DO ELEMENTO ROOT
ReactDOM.render(
    //COMPONENTES DEVEM SER ENCAPSULADOS POR UM <></> OU UMA TAG HTML
    <>
        <PrimeiroComponente />
        <hr></hr>
        <CompParametro
            titulo={"Situação Cadastral"}
            aluno={"Renato Lomba"}
            nota={8}
        />
        <hr></hr>
        <Fragmentos />
    </>,
    rootElement
)
