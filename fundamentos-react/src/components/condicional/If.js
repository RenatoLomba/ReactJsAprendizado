
export default props => {

    //FILTRA ATÉ ENCONTRAR O ELEMENTO ELSE
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    //FILTRA RETORNANDO TODOS OS ELEMENTOS DIFERENTES DE ELSE
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    //CASO A EXPRESSÃO SEJA VERDADEIRA, EXIBE OS ELEMENTOS FORA DO ELSE
    if (props.test) {
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}

//ELEMENTO ELSE
export const Else = props => props.children
