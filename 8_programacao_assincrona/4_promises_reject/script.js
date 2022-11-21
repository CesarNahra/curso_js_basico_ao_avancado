function verificaNumero(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            console.log(`O número é ${num}`);
        } else {
            reject (new Error("Falhou"));
        }
    });
    
}
verificaNumero(3);
verificaNumero(2)
