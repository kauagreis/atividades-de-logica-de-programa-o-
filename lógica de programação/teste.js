const prompt = require("prompt-sync")({sigint:true})
 
var  n1 = 0, n2 = 0, n3 = 0,nome = ''

nome = prompt("Digite o nome do aluno:")
n1 = Number(prompt("Digite a primeira nota do aluno:"))
n2 = Number(prompt("Digite a segunda nota do aluno:"))
n3 = Number(prompt("Digite a terceira nota do aluno:"))
media = (n1 + n2 + n3)/3
if (media >= 5){
    console.log("O(A) aluno(a) ",nome ," foi aprovado com a media: ",media)
}else if (media >=3 && media < 5){
    console.log("O(A) aluno(a) ",nome ," esta em recuperação com a media: ",media)
} else{
    console.log("O(A) aluno(a) ",nome ," esta reprovado com a media: ",media)
}



