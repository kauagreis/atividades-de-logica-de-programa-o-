const prompt = require("prompt-sync")({sigint:true})

var count= 0, continua = "s"

count = 1

while (continua == "s"){
    console.log(count)
    count++
    continua = prompt("Digite s para continuar: ")
}

for (var count = 0; count < 10; count++){
    console.log(count)   
}