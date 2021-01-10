import React from 'react'

//COMPONENTE COM PARÂMETRO
export default props =>
    <>
        <div><strong>Aluno: </strong>{props.aluno}</div>
        <div><strong>Nota: </strong>{props.nota}</div>
        <div><strong>Situação: </strong>{props.nota >= 6 ? "Passou" : "Não Passou"}</div>
    </>
