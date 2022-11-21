function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favor, passe só números");
    } else {
        return number;
    }
}

// checarNumero(5);
// checarNumero("jui");

let number = prompt("Digite um número");

checarNumero(number)