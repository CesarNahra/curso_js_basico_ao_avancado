const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
// const validaIp = /[0-9]{3}[.][0-9]{1}[.][0-9]{1}[.][0-9]{1}/;

console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("192.168.0.62"));
console.log(validaIp.test("8.8.8.8"));

console.log(validaIp.test("192.168.0"));
console.log(validaIp.test("192"));
console.log(validaIp.test("1564565464"));
console.log(validaIp.test("1922.1682.0000.6200"));