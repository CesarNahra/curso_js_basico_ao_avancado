function dado(dado){
    if(typeof dado === 'boolean'){
        console.log("Isso é um boolean");
    } else if(typeof dado === 'string') {
        console.log("Isso é uma string");
    } else if(typeof dado === 'number'){
        console.log("Isso é um number");
    }
}

dado(100);

dado(false);

dado("Oi");