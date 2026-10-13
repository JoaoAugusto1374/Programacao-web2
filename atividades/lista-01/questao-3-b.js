function produtorio(n) {
    if(n == 0) {
        return 1;
    }

    return n * produtorio(n - 1);
}

console.log(produtorio(5))
//trabalho desnecessário, repense sobre kkk
