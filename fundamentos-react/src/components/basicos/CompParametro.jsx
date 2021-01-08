import React from 'react'

//COMPONENTE COM PARÂMETRO
export default function CompParametro(props) {
    let situacao = props.nota >= 6 ? "Passou" : "Não Passou"
    return (
        <>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno}</h3>
            <h4>{props.nota}</h4>
            <h5>Situação: {situacao}</h5>
        </>
    )
}
