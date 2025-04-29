const prompt = require("prompt-sync")({sigint:true})

var cm = 0, tempo = 0, vel = 0, litro = 0, dist = 0

tempo = Number(prompt("digite o tempo gasto na viagem: "))
vel = Number(prompt ("digite a velocidade media na viagem: "))

dist = tempo*vel
litro = dist/ cm 

console.log("a media de velocidade da viagem foi de ",vel)
console.log("o tempo gasto na viagem foi de ",tempo)
console.log("a distancia percorrida na viagem foi de ",dist)
console.log("a quantidade de litros gasto foi de ",litro)

