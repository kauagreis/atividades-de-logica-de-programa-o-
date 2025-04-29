const prompt = require("prompt-sync")({sigint:true})

var senhabanco = "joia"

for(tentativa = 1; tentativa <4; tentativa++) {
    senha = prompt("digite a senha: ")
    if (senha == senhabanco){
        console.log("ENTROU!!!!!")
        break
    }else{
        console.log("TENTATIVA ",tentativa,"....!!!!!!!!!")
    }
}