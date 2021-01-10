import React from 'react'
import '../layout/Tabela.css'
import produtos from '../../data/produtos'

export default props => {
    return (
        <>
            <table className="Tabela">
                <thead className="Cabecalho">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody className="Corpo">
                    {
                        //MAPEAMENTO DA LISTA DE PRODUTOS COMO OS ITENS DE UMA TABELA
                        produtos.map((produto, i) => {
                            return (
                                //APLICAR ESTILO ZEBRADO, INDEX PAR OU IMPAR
                                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}
