let idade = 17;
let cnh = false;

if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
} else if(idade >= 18 && cnh == false){
    console.log("Não pode dirigir, mas pode fazer a CNH");
} else {
    console.log("Não pode dirigir");
}