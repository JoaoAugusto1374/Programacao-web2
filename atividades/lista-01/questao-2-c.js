let nota1 = Number(prompt("Digite a nota da etapa n1: "))
let nota2 = Number(prompt("Digite a nota da etapa n2: "))

let notaFinal = ((nota1 * 2) + (nota2 * 3)) / 5

if (notaFinal >= 7) {
    alert(`Sua nota foi ${notaFinal} e você está aprovado`)
} else {
    alert(`Sua nota foi ${notaFinal} e você está reprovado`)
}



