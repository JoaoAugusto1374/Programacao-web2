function retornaImpares(array) {
    let impares = [];

    for(let valor of array) {
        if (valor % 2 != 0) {
            impares.push(valor)
        }
    }

    return impares;
}

console.log(retornaImpares([1,2,3,4,5,6,7,8,9,10]))
