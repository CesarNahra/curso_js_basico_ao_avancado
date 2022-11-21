const validaNome = /^(?=.{3,16}$)([a-z0-9-_])/;

console.log(validaNome.test("matheus_123"));

console.log(validaNome.test("as"));
console.log(validaNome.test("11111111111111111111111111111111111111111111111"));