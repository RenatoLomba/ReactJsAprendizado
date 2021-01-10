import React from 'react'
import './Card.css'

//CHILDREN RECUPERA OS ELEMENTOS FILHOS DO COMPONENTE
export default props => {

    //PASSANDO ESTILO CSS A PARTIR DE PARÂMETROS
    const cardStyle = {
        backgroundColor: props.color || 'crimson', //RECUPERA A COR DE PROPS, OU SE NÃO TIVER, PASSA COMO CRIMSON MESMO
        borderColor: props.color || 'crimson'
    }
    return (
        <>
            <div className="Card" style={cardStyle}>
                <div className="Title">
                    {props.titulo}
                </div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
        </>
    )
}
