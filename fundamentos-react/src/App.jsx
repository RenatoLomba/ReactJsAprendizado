import React from 'react'

//IMPORTS COMPONENTES
import PrimeiroComponente from './components/basicos/PrimeiroComponente' //IMPORTA A FUNÇÃO PRIMEIRO QUE ESTÁ NO ARQUIVO PrimeiroComponente.js
import CompParametro from './components/basicos/CompParametro'
import Fragmentos from "./components/basicos/Fragmentos"
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Megasena from './components/megasena/Megasena'

//CSS
import './App.css'

export default props => {
    return (
        //COMPONENTES DEVEM SER ENCAPSULADOS POR UM <></> OU UMA TAG HTML
        <>
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#13 - Desafio MegaSena">
                    <Megasena />
                </Card>
                <Card titulo="#12 - Contador baseado em Classe" color="aqua">
                    <Contador numeroInicial={10} />
                </Card>
                <Card titulo="#11 - Componente Controlado" color="coral">
                    <Input />
                </Card>
                <Card titulo="#10 - Comunicação indireta" color="blueviolet">
                    <IndiretaPai />
                </Card>
                <Card titulo="#09 - Comunicação direta">
                    <DiretaPai />
                </Card>
                <Card titulo="#08 - Renderização Condicional" color="aqua">
                    <ParOuImpar numero={9} />
                    <UsuarioInfo usuario={{ nome: 'Renato' }} />
                    {/* <UsuarioInfo usuario={{ email: 'rntlomba@gmail.com' }} /> */}
                </Card>
                <Card titulo="#07 - Tabela de Produtos" color="coral">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 - Repetição" color="blueviolet">
                    <ListaAlunos />
                </Card>
                <Card titulo="#05 - Componentes com Filhos">
                    <Familia sobrenome="Willingham">
                        <FamiliaMembro nome="Travis" />
                        <FamiliaMembro nome="Ronin" />
                        <FamiliaMembro nome="Laura" />
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="aqua">
                    <NumeroAleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - React Fragments" color="coral">
                    <Fragmentos />
                </Card>
                <Card titulo="#02 - Situação Cadastral" color="blueviolet">
                    <CompParametro
                        aluno={"Renato Lomba"}
                        nota={8}
                    />
                </Card>
                <Card titulo="#01 - Primeiro Componente">
                    <PrimeiroComponente />
                </Card>
            </div>
        </>
    )
}
