function solucao(precos) {
    let total = 0
    if (precos.length >= 5) {
        for (let valor of precos){
        total = total + valor
        } console.log(total - Math.min(...precos))
        
    } else {
        for (let valor of precos){
        total = total + valor
        } console.log(total)
    }
}