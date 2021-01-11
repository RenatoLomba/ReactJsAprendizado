import React from 'react'

export default props => {
    return (
        <div>
            <label>Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.valorPasso}
                onChange={e => props.funcPasso(parseInt(e.target.value))} />
        </div>
    )
}
