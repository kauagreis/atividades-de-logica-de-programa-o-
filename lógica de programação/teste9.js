const prompt = require("prompt-sync")({sigint:true})

var n1 = 0, n2 = 0

n1 = Number(prompt("Digite o primeiro número: "))
n2 = Number(prompt("Digite o segundo número: "))

while (n2 == 0){
    console.log("VALOR INVÁLIDO")
    n2 = Number(prompt("Digite o segundo número diferente de ZERO: "))
}
res = n1/n2

console.log("O resultado da divisao do primeiro pelo segundo é: ",res)