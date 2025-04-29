const prompt = require("prompt-sync")({sigint:true})

var texto = "", count = 0

texto = (prompt("digite o seu nome: "))
while(count <= 9){
    console.log(texto)
    count++
}


