const prompt = require("prompt-sync")({sigint:true})

var number = 1, continua = 0, maior = 0


while(continua != 9999){
  number = Number(prompt("Digite um número: "))
  
        if (maior < number){
            maior = number

        }
        continua = prompt("Caso queira parar, digite 9999: ")
    }
    console.log("a maior nota e ",maior)


