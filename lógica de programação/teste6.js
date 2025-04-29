const prompt = require("prompt-sync")({sigint:true})

var n1 = 0, n2 = 0, cal = 0

n1 = Number(prompt("Digite o primeiro número: "))
n2 = Number(prompt("Digite o segundo número: "))
cal = prompt("Digite qual calculo deseja realizar (+ * / -): ")


switch (cal){
    case "+":
        soma = n1 + n2
    console.log("resultado da soma: ",soma);
    break
    case "*":
        multiplicacao = n1*n2
        console.log("resultado da multiplicacao: ",multiplicacao);
        break
    case "/":
        divisao = n1/n2
        console.log("resultado da divisão: ", divisao);
        break
    case "-":
        subtracao = n1 - n2
        console.log("resultado da subtração: ", subtracao)
        break
    default:
        console.log("não é possível fazer esse calculo")
        break

}

