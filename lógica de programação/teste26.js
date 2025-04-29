const prompt = require("prompt-sync")({sigint:true})

var  num = 0, cont = 0, resul = 0

num = Number (prompt("digite um valor(entre 1 a 10): "))

if(num >= 1 && num <= 10){
    for (cont = 1; cont <= 10; cont++){
        console.log(num," x ",cont," = ",num*cont)
    }
}else {
    console.log("O número não está entre 1 e 10!!!!!")
}



