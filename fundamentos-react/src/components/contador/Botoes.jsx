import React from 'react'

export default props => {
    return (
        <>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </>
    )
}
