const validaDataNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaDataNascimento.test("05/02/2000"));
console.log(validaDataNascimento.test("5/2/2000"));