const prompt = require("prompt-sync")({sigint:true})

var novaidade = 0

class Animal {
    constructor(type, name, sound, age){
        this.type = type;
        this.name = name;
        this.sound = sound;
        this.age = age;
    }
 makeaSound(){
    console.log(this.name, "diz:",this.sound);
}
aniv(){
    this.age = this.age + 1
}
}

var bela = new Animal("cat"," bela", " meaou", 3)

console.log(bela)
bela.aniv()
console.log(bela)
bela.makeaSound()
