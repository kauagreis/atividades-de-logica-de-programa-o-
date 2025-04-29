const prompt = require("prompt-sync")({sigint:true})

var a = 0, b = 0, c = 0

a = Number(prompt("Digite o A da questão:"))
b = Number(prompt("Digite o B da questão:"))
c = Number(prompt("Digite o C da questão:"))

delta = (b*b) - (4*a*c)

console.log("O delta da questão é ", delta)