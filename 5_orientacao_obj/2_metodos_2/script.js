const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Auuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrrr");
    },
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },
    getRaca: function(){
        return "A raça é: " + this.raca
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());
