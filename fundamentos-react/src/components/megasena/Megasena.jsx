import React, { useState } from 'react'
import GerarNumeros from './GerarNumeros.js'
import './Megasena.css'

export default props => {
    const [posicoes, setPosicoes] = useState(6)
    const [listaPosicoes, setLista] = useState([])
    return (
        <>
            <div className="Megasena">
                <h2>Megasena</h2>
                <h3>{listaPosicoes.sort((a, b) => a - b).join(' ')}</h3>
                <div>
                    <label for="posicoes">Posições: </label>
                    <input
                        min="3"
                        max="8"
                        type="number"
                        id="posicoes" value={posicoes}
                        onChange={e => setPosicoes(parseInt(e.target.value))}
                    />
                </div>
                <button onClick={_ => setLista(GerarNumeros(posicoes))}>Gerar</button>
            </div>
        </>
    )
}
