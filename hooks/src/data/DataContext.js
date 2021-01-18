import React from 'react'

//OBJETO DE DADOS DO CONTEXTO
export const data = {
    number: 123,
    text: 'Context API...'
}

//CONTEXTO CONTENDO OS DADOS
const DataContext = React.createContext(null)
export default DataContext
