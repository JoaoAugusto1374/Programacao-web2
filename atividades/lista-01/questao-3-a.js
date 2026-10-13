function tabuada(n1, n2, char) {
    switch(char) {
        case "+":
            let soma = n1 + n2;
            break;
        case "-":
            let sub = n1 - n2;
            break;
        case "*":
            let mult = n1 * n2;
            break;
        case "/":
            let div = n1 / n2;
            break;
        default:
            console.log("Digite uma operação válida;")
    }
}



