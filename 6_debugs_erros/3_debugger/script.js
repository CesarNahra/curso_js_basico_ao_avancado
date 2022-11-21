let a = 1; // 2, 6, 12, 20, 30, 42, 62, 434
let b = 2; // 3, 4, 5, 6, 7
let c = 3; // 5, 7, 9, 11, 13

if(c > a){
    a = b;
    debugger;
}


for(let i = 5; i > 0; i--){
    b++;
    a = a + c + 1;
    c += 2;
    debugger;
}


if(b == a){
    a++;
} else {
    a = a + b + c;
}

debugger;

a = a * b;

debugger;

console.log("teste");