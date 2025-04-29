const prompt = require("prompt-sync")({sigint:true})

var f = 0, c =0



c = Number(prompt("Digite a temperatua em graus celsius: "))

f = (9.0*c+160.0)/5.0

if (f < 50 ){
console.log("Ta FRIIIIOOOOOOOOOOOOOOO, a temperatura esta em ",f," Fahrenheit.")
}else{
    console.log("Tste clima esta bom demaiiiiiiiiiis!!!!!!, a temperatura esta em ",f," Fahrenheit.")
}


