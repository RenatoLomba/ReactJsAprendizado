import React from 'react'

export default props => {
    const idadeRandom = () => Math.ceil(Math.random() * (40 - 10) + 10)
    const listaNomes = ['Renato', 'Matthew', 'Marisha', 'Laura', 'Liam', 'Travis', 'Sam', 'Ashley', 'Orion', 'Taliesin']
    const posicaoAleatoria = () => Math.ceil(Math.random() * (9 - 0) + 0)
    const motoristaRandom = () => Math.random() > 0.5
    return (
        <>
            <div>
                <div>Filho</div>
                <button onClick={(e) => props.clicado(listaNomes[posicaoAleatoria()], idadeRandom, motoristaRandom)}>
                    Fornecer Informações
                </button>
            </div>
        </>
    )
}
