import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    //ESTADOS INICIAIS
    const [nome, setNome] = useState('???'),
        [idade, setIdade] = useState(0),
        [motorista, setMotorista] = useState(false);

    //FUNÇÃO CALLBACK PASSADA PARA O FILHO
    function fornecerInfo(nome, idade, motorista) {
        setNome(nome)
        setIdade(idade)
        setMotorista(motorista)
    }

    return (
        <>
            <div>
                <span><strong>{nome}</strong> - </span>
                <span>{idade}, </span>
                <span>{motorista ? 'É motorista' : 'Não é motorista'}</span>
            </div>
            <IndiretaFilho clicado={fornecerInfo} />
        </>
    )
}
