import React, { useState } from 'react'
import './Input.css'

//COMPONENTES CONTROLADOS
export default props => {

    const [valor, setValor] = useState('Inicial');

    //FUNÇÃO RECEBE O EVENTO E ALTERA O ESTADO DO VALOR, ALTERANDO ASSIM A VISUALIZAÇÃO DENTRO DO INPUT
    function changed(e) {
        setValor(e.target.value)
    }

    return (
        <>
            {/* INPUTS POR PADRÃO NÃO PODEM SER ALTERADOS SEUS VALORES, 
            APENAS A PARTIR DE UMA FUNÇÃO CALLBACK QUE MODIFIQUE SEU ESTADO */}
            <div className="Input">
                <h2>{valor}</h2>
                <input type="text" value={valor} onChange={changed} />
                <input type="text" value={valor} readOnly />
                <input type="text" value={undefined} />
            </div>
        </>
    )
}
