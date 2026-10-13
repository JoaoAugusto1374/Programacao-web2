function multiplicarValores(...numeros) {
    let prod = 1

    for(let i = 0; i < numeros.length; i++) {
        prod *= numeros[i]
    }

    return prod;
}

console.log(multiplicarValores(1,2,3))
