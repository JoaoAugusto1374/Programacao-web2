let numeros = Number(prompt("Digite a quantidade de números que serão avaliados: "))
let ehPrimo = false
let soma = 0
for (let i = 2; i <= numeros; i++) {

    ehPrimo = true

    for(let j = 2; j <= i - 1; j++) {
        if ( i % j == 0) {
            ehPrimo = false
            break
        }
        
    }

    if(ehPrimo) {
        soma += i;
    }
    
}

alert(`a soma dos primos foi ${soma}`)

