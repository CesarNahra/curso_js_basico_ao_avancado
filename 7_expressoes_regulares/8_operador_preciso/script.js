const cep = /\d{5}-\d{3}/;

console.log(cep.test("11111-000"));
console.log(cep.test("111-000"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(48)99999-9999"))