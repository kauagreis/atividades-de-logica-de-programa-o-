const prompt = require("prompt-sync")({sigint:true})

var velomedia = 0, quantgaso = 0, consumo = 0, distancia = 0, tempo = 0

tempo = Number(prompt("digite o tempo gasto numa viagem: "))
velomedia = Number(prompt("digite a media da velocidade gasto numa viagem: "))
quantgaso = Number(prompt("digite a quantidade de gasolina gasto numa viagem: "))

distancia = (velomedia*tempo)
consumo = (distancia/quantgaso)
console.log ("foram percorridos ",distancia, "km, com o consumo médio de ",consumo.toFixed(2))

if (consumo >= 14){
    console.log("ECONOMICO!!!!")
}else if (consumo >= 10 && consumo < 14){
    console.log("DENTRO DO PADRAO!!!!!!")
}else{
    console.log("BEBERRAO!!!!!!")
}