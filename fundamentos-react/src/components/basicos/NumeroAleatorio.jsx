import React from 'react'

//COMPONENTE QUE RECEBE 2 PARÂMETROS E RETORNA UM NUMERO ALEATÓRIO ENTRE OS 2
export default props =>
    <>
        <h2>Valor Aleatório</h2>
        <div><strong>Valor Mínimo: </strong>{props.min}</div>
        <div><strong>Valor Máximo: </strong>{props.max}</div>
        <div><strong>Valor Aleatório: </strong>{Math.round(Math.random() * (props.max - props.min) + props.min)}</div>
    </>
