function solucao(produtos) {
    let totalTop = 0
    let percentual= 0
    let valorTotal = 0

    for (let valores of produtos) {
        let valor = valores.preco
        valorTotal = valorTotal + valor
        if (valor > 10000){
            totalTop = totalTop + valor
        }
    }
    percentual = (totalTop / valorTotal)
    let resposta = {totalTop, percentual}
    console.log(resposta)
}