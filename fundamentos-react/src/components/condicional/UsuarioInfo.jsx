import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            {/* TRECHO SÓ SERÁ EXIBIDO CASO O TESTE RETORNAR VERDADEIRO (USUARIO E NOME DE USUARIO EXISTIR) */}
            <If test={usuario && usuario.nome}>
                Seja Bem-vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja Bem-vindo <strong>Usuário</strong>!
                </Else>
            </If>
            {/* <If test={!usuario || !usuario.nome}>
                <div>
                    Seja Bem-vindo <strong>Usuário</strong>!
                </div>
            </If> */}
        </>
    )
}
