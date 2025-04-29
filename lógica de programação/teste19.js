const prompt = require("prompt-sync")({sigint:true})

var estado = ""

estado = (prompt("digite a sigla do seu estado: "))

switch(estado){
    case "RJ":
        console.log("carioca");
    break
    case "SP":
        console.log("paulista");
    break
    case "MG":
        console.log("mineiro(a)");
    break
    default:
        console.log("outros estados");
        break
}