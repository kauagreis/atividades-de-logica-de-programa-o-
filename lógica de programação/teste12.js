const prompt = require("prompt-sync")({sigint:true})

var number = 0, par = 0, impar = 0, continua =0

while (continua != 9999){
    number = Number(prompt("Digite um número: "))

    if ((number%2) == 0){
        par++
    }else{
        impar++
    }
    continua = prompt("Caso queira parar, digite 9999: ")
}

console.log("quantidade de números pares: ",par)
console.log("quantidade de números ímpares: ",impar)