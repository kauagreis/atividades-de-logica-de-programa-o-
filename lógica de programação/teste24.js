const prompt = require("prompt-sync")({sigint:true})

var idade = 0, nome = ""

nome = (prompt("digite o seu nome: "))
idade = Number(prompt("digite a sua idade: "))

if(idade <= 16){
    console.log(nome, " é não-leitor")
}else if ((idade >= 18) && (idade <= 65)){
    console.log(nome, " é eleitor obrigatório")
} else if ((idade >16 && idade < 18) || (idade > 65) ){
    console.log(nome, " é eleitor facultativo")
}