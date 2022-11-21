const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("teste@email.com"));
console.log(validaEmail.test("email@email"));
console.log(validaEmail.test("ronaldo@yahoo.com.br"));
console.log(validaEmail.test("email.com"));