import React from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

//COMPONENTE BASEADO EM CLASSE
export default class Contador extends React.Component {

    //ESTADO DO COMPONENTE
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    //INCREMENTA O ESTADO DE NUMERO
    inc = () => {
        //SET STATE UTILIZADO PARA MUDAR O ESTADO
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    //DECREMENTA O ESTADO DE NUMERO
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    //USUARIO PODERÁ MUDAR O PASSO
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    //FUNÇÃO RENDER É RESPONSAVEL POR RETORNAR O CONTEÚDO HTML DO COMPONENTE
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm valorPasso={this.state.passo} funcPasso={this.setPasso} />
                <Botoes inc={this.inc} dec={this.dec} />
            </div>
        )
    }

}
