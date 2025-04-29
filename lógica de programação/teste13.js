const prompt = require("prompt-sync")({sigint:true})

var a = 0, b = 0

a = Number(prompt("Digite o primeiro número:"))
b = Number(prompt("Digite o segundo numero: "))

if (a>b){
    console.log("O primeiro número ,",a,", é maior que o segundo número ,",b )
} else if(b>a){
    console.log("O segundo número ,",b,", é maior que o primeiro número ,",a)

}else{
    console.log("Os números são iguais: ",a)
}