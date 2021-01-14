import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = props => {
    const location = useLocation()
    return (
        < div className="NotFound" >
            <h1 style={{ color: "red" }}>Erro 404</h1>
            <p>Página <code>{location.pathname}</code> não encontrada</p>
        </div >
    )
}

export default NotFound
