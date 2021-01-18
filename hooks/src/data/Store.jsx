import React, { useState } from 'react'

const initialState = {
    number: 666,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = (props) => {
    const [state, setState] = useState(initialState)

    //FUNÇÃO QUE ATUALIZA O ESTADO, RECEBE A CHAVE E O VALOR A SEREM ALTERADOS
    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: txt => updateState('text', txt)
        }}>
            { props.children}
        </AppContext.Provider >
    )
}

export default Store
