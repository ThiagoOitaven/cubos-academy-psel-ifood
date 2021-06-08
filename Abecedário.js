function solucao(letra, palavras) {
    let perdedores = 0
    
    for (let primeiraLetra of palavras) {
        if (primeiraLetra[0] == letra) {
            perdedores++;
        }
    }
    console.log(palavras.length - perdedores)
}