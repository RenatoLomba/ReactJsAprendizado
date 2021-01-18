import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//ESTADO INICIAL DA APLICAÇÃO
const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

//FUNÇÃO REDUCER QUE IRÁ ALTERAR O ESTADO INICIAL BASEADO NUMA AÇÃO PASSADA
function reducer(state, action) {
    switch (action.type) {
        case 'addNumber':
            return { ...state, number: state.number + 1 }
        case 'login':
            return { ...state, user: { name: 'Renato' } }
        default:
            return state
    }
}

const UseReducer = (props) => {
    //INICIALIZA UM REDUCER COM O ESTADO INICIAL E A FUNÇÃO PARA ALTERA-LO
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={_ => dispatch({ type: 'addNumber' })}>+</button>
                    <button className="btn" onClick={_ => dispatch({ type: 'login' })}>Logar</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
