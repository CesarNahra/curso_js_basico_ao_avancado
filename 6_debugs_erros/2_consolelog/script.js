let a = 1; // 2, 6, 12, 20, 30, 42, 62, 434
let b = 2; // 3, 4, 5, 6, 7
let c = 3; // 5, 7, 9, 11, 13

if(c > a){
    a = b;
}

console.log("O valor de a é " + a)

for(let i = 5; i > 0; i--){
    b++;
    a = a + c + 1;
    c += 2;
}

console.log("O valor de a é " + a);
console.log("O valor de b é " + b);
console.log("O valor de c é " + c);

if(b == a){
    a++;
} else {
    a = a + b + c;
}

console.log("O valor de a é " + a);
console.log("O valor de b é " + b);
console.log("O valor de c é " + c);

a = a * b;

console.log("O valor de a é " + a);
console.log("O valor de b é " + b);