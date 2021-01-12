export default qtd => {
    let listaNumeros = []
    for (let i = 0; i < qtd; i++) {
        const randomNumber = Math.round(Math.random() * (60 - 1) + 1)
        if (!listaNumeros.includes(randomNumber)) {
            listaNumeros.push(randomNumber)
        } else {
            i--
        }
    }
    return listaNumeros;
}
