let onibus = {
    rodas: 8,
    limite: 40,
    portas: 2,
}

console.log(onibus.rodas);
console.log(onibus.limite);
console.log(onibus.portas);

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus.rodas);
console.log(onibus.janelas);