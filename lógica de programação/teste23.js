const prompt = require("prompt-sync")({sigint:true})

var desconto = 0, valor = 0, novovalor=0

valor = Number(prompt("digite o valor do produto: "))
desconto = Number(prompt("digite o valor do desconto: "))
novovalor= valor*(1-desconto/100)
if (!isNaN(valor) && !isNaN(desconto)){ 
console.log("o novo valor do produto com desconto é ",novovalor)
}
