function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("auuuuuuuu");
}

let pug = new Cachorro("Pug", 4, "marrom");

pug.uivar();