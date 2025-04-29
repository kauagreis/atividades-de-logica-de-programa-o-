const prompt = require("prompt-sync")({sigint:true})

var m1 = 0, m2 = 0, sm = 0, mm = 0

m1 = (8+9+7)/3
m2 = (4+5+6)/3
sm = m1 + m2
mm = (m1 + m2)/2

console.log("a media dos números 8,9 e 7 é ",m1)
console.log("a media dos números 4,5 e 6 é ",m2)
console.log("a soma das duas medias é ",sm)
console.log("a media das medias é ",mm)