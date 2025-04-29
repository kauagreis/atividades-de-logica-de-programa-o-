const prompt = require("prompt-sync")({sigint:true})

var numero = 0, antecessor = 0, sucessor = 0



numero = Number(prompt("digite um número: "))
sucessor = (numero + 1)
antecessor = (numero - 1)
console.log("o antecessor do número escolhido é ",antecessor,", e o sucessor é ",sucessor)