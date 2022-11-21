let stringFinalId = /\d+ID\b/;

console.log(stringFinalId.test("12ID"));
console.log(stringFinalId.test("12"));
console.log(stringFinalId.test("huoh"));
console.log(stringFinalId.test("hhloID"));