function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.latir = function (){
        console.log("au au");
    }
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criaCachorro("Doberman", 4, "marrom");

console.log(doberman);

doberman.latir();