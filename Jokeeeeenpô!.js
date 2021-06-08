function solucao(joao, andre) {
    if (joao == andre) {
        console.log("EMPATE")
    } else if (joao == "PEDRA") {
        if (andre == "PAPEL") {
            console.log("ANDRE")
        } else {
            console.log("JOAO")
        }
    } else if (joao == "PAPEL") {
        if (andre == "TESOURA") {
            console.log("ANDRE")
        } else {
            console.log("JOAO")
        }         
    } else if (joao == "TESOURA") {
        if (andre == "PEDRA") {
            console.log("ANDRE")
        } else {
            console.log("JOAO")
        }
    }
}