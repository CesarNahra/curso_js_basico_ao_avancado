function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("auuuuuu");
    }
}

let husky = new Cachorro("Husky", 4, "preto e branco");

console.log(husky);

husky.uivar();