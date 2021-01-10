import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    return (
        <>
            <ul>
                {alunos.map(aluno => {
                    //MAPEIA UMA LISTA DE OBJETOS JS PARA UMA LISTA DE ELEMENTOS OU COMPONENTES JSX
                    return <li key={aluno.id}>{`${aluno.id} - Nome: ${aluno.nome} - Nota: ${aluno.nota}`}</li>
                })}
            </ul>
        </>
    )
}
