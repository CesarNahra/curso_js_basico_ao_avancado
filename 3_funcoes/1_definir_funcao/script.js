function imprimirNoConsole(){
    console.log("Escrevendo no console");
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("O número é: " + num);
}

imprimirUmNumero(100);
imprimirUmNumero(200);
imprimirUmNumero(300);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();