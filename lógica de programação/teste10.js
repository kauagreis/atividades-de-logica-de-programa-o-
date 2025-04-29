const prompt = require("prompt-sync")({sigint:true})

var num = 0, cont = 0, continua = 0, acumulado = 0, media = 0

while (continua != 9999){
    num = Number(prompt("Digite um número: "))
    acumulado = acumulado+num
    cont++
    continua = prompt("Caso queira parar, digite 9999: ")
}
media = acumulado/cont
console.log('O acumulado de numeros e ',acumulado,', a quantidade de numeros digitados e ',cont,', a media e ',media)


