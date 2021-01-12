import React, { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

export default class Calculator extends Component {

    clearMemory = () => {
        console.log('limpar')
    }

    setOperation = (op) => {
        console.log(op)
    }

    addDigit = (n) => {
        console.log(n)
    }

    render() {
        return (
            <div className="Calculator">
                <Display value={100} />
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
