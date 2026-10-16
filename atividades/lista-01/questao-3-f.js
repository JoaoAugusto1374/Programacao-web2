const conta = {
    saldo: 200,
    numeroConta: "123456",
    saque: function (saque) {
        if(this.saldo > saque) {
            this.saldo = saldo - saque;
        }
    },

    depositar: function (deposito) {
        this.saldo += deposito  
    },

    informarSaldo: function () {
        return this.saldo
    }
}

/*
function sacar(saque) {
    if (conta.saldo > 0) {
        conta.saldo = conta.saldo - saque;
    }

    return conta.saldo;
}

function depositar(valor) {
    conta.saldo += valor;

    return conta.saldo;
}


function informarSaldo() {
    return `O seu saldo atual é ${conta.saldo}`
}

console.log(sacar(100))
*/

