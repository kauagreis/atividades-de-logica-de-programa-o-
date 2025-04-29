const prompt = require("prompt-sync")({sigint:true})

var salario = 0, operacao = 0, salariototal = 0

salario = Number(prompt("Digite o salario desejado: "))
console.log("1 = 15%, 2 = 10%, 3 = 7%, 4 = percentual desejado")
operacao = Number(prompt("Digite o aumento desejado: "))

switch(operacao){
    case 1:
    salariototal = salario + (salario*15/100)
    console.log("resultado do salario total: ",salariototal);
        break
    case 2: 
    salariototal = salario + (salario*10/100)
    console.log("resultado do salario total: ",salariototal);
        break
    case 3:
        salariototal = salario + (salario*7/100)
    console.log("resultado do salario total: ",salariototal);
        break
    case 4:
        suboperacao = Number(prompt("Digite o percentual desejado: "))
        salariototal = salario + (salario*(suboperacao)/100)
        console.log("resultado do salario total: ",salariototal);
    default:
        console.log("não foi possível fazer esse cálculo");
        break
}


