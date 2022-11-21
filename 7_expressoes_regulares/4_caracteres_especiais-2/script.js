const dia = /\d\d/;

console.log(dia.test("2019")&& "2019".length == 2);
console.log(dia.test("huh"));
console.log(dia.test("05") && "05".length == 2);

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asdd") && "asdd".length == 3);
console.log(palavraTresLetras.test("as"));