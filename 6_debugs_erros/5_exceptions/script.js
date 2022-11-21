function saudacao(nome){
    if(typeof nome != "string"){
        throw new Error("O parâmetro precisa ser string");
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacao("César");
saudacao(2);

console.log("teste");