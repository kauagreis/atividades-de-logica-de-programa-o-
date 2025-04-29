const prompt = require("prompt-sync")({sigint:true})

var nome = "", sexo = "", idade = 0

nome = prompt("Digite seu nome: ")
sexo = (prompt("Digite seu genero(F ou M): "))
idade = Number(prompt("Digite sua idade: "))

if ((sexo == "F") && (idade < 25)){
    console.log(nome," ACEITA")
} else{
    console.log(nome," NÃO ACEITA")
}