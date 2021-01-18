import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

//IMPORTA O CONTEXTO E OS DADOS
import DataContext, { data } from '../data/DataContext'
import Store from '../data/Store'

//EVOLVE TODA A APLICAÇÃO EM UM CONTEXTO PASSANDO OS DADOS
const App = props => {

    //ESTADO DO OBJETO CONTENDO OS DADOS DO CONTEXTO
    const [state, setState] = useState(data)

    //PASSO PARA O CONTEXTO O PRÓPRIO ESTADO E A FUNÇÃO QUE O ALTERA
    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App
