let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("au au");
    },
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);

console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.latir();

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);

console.log(labrador.raca);

console.log(cachorro.raca);