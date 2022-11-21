let a = document.querySelector("footer a");
console.log(a.getAttribute("href"));

let link = "htts://www.horadecodar.com.br";

a.setAttribute("href", link);

console.log(a.getAttribute("href"));