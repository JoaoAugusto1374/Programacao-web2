function aplicarDesconto(valor, quantidade, desconto = 0) {
    let valorCompra = (valor * quantidade) - desconto;
    return valorCompra; 
}


console.log(aplicarDesconto(10,5, 10))
