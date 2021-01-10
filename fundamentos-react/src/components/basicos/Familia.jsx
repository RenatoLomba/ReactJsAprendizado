import React from 'react'

export default props => {
    return (
        <>
            <div>
                {/* CLONA UM ELEMENTO, NESSE CASO CLONANDO OS FILHOS E PASSANDO AS PROPS PARA OS ELEMENTOS CLONADOS */}
                {/* React.cloneElement(props.children, { ...props }) */}
                {
                    /* React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, props)
                    }) */
                    props.children.map((child, i) => {
                        return React.cloneElement(child, { ...props, key: i })
                    })
                }
            </div>
        </>
    )
}
