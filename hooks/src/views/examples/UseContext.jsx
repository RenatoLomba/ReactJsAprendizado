import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//OBJETO DE CONTEXTO
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    //RECEBE OS DADOS DO CONTEXTO
    const { state, setState } = useContext(DataContext)

    function modNumber(num) {
        setState({
            ...state,
            number: num
        })
    }

    const { number, text, setNumber, setText } = useContext(AppContext)

    useEffect(() => {
        setText(number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number, setText])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text red">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => modNumber(state.number + 1)}>+</button>
                    <button className="btn" onClick={() => modNumber(state.number - 1)}>-</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text red">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+</button>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
