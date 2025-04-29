const prompt = require("prompt-sync")({sigint:true})

var kwgasto = 0, salminimo = 0, vlrkw = 0

kwgasto = Number(prompt("Digite a quantidade de kilowats gasto na residência: "))
salminimo = Number(prompt("Digite o valor do salário mínimo: "))

vlrkw = (salminimo/7)


console.log("voce gastou consumindo ",kwgasto,"kwats com ",(kwgasto*vlrkw).toFixed(2),"reais")
console.log("Com o desconto de 10%, você pagará ",((kwgasto*vlrkw)*0.90).toFixed(2))

