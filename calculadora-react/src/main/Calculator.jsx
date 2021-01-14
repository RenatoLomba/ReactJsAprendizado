import React, { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

//ESTADO INICIAL DA CALCULADORA
const initialState = {
    displayValue: '0', //VALOR NO DISPLAY
    clearDisplay: false, //LIMPAR DISPLAY
    operation: null, //OPERAÇÃO
    values: [0, 0], //VALORES QUE SERÃO UTILIZADOS
    current: 0 //POSIÇÃO ATUAL DO ARRAY
}

export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = (operation) => {
        //SETAR OPERAÇÃO, LIMPAR O DISPLAY
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            //EXECUTA OS CÁLCULOS
            switch (currentOperation) {
                case '+':
                    values[0] = values[0] + values[1]
                    break;
                case '-':
                    values[0] = values[0] - values[1]
                    break;
                case '*':
                    values[0] = values[0] * values[1]
                    break;
                case '/':
                    values[0] = values[0] / values[1]
                    break;
                default:
                    break;
            }
            values[1] = 0
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit = (n) => {
        //CASO O VALOR DIGITADO FOR . E JA HOUVER UM . NO DISPLAY, ELE IGNORA
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        //CASO O VALOR DO DISPLAY SEJA 0 OU O ESTADO SEJA VERDADEIRO, LIMPA O VALOR DO DISPLAY
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        //VALOR DO DISPLAY ATUAL, OU VAZIO
        const currentValue = clearDisplay ? '' : this.state.displayValue

        //VALOR ATUAL DO DISPLAY CONCATENADO COM O VALOR DIGITADO
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        //ARMAZENAR O VALOR DIGITADO NO ESTADO
        if (n !== '.') {
            const index = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[index] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="Calculator">
                <Display value={this.state.displayValue} />
                <Button click={this.clearMemory} triple label="AC" />
                <Button click={this.setOperation} operation label="/" />
                <Button click={this.addDigit} label="7" />
                <Button click={this.addDigit} label="8" />
                <Button click={this.addDigit} label="9" />
                <Button click={this.setOperation} operation label="*" />
                <Button click={this.addDigit} label="4" />
                <Button click={this.addDigit} label="5" />
                <Button click={this.addDigit} label="6" />
                <Button click={this.setOperation} operation label="-" />
                <Button click={this.addDigit} label="1" />
                <Button click={this.addDigit} label="2" />
                <Button click={this.addDigit} label="3" />
                <Button click={this.setOperation} operation label="+" />
                <Button click={this.addDigit} double label="0" />
                <Button click={this.addDigit} label="." />
                <Button click={this.setOperation} operation label="=" />
            </div>
        )
    }
}
