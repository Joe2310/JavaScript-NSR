const paises = ['brasil','argentina','estados unidos','africa','china'];

console.log("Adicionando um pais no final do array.");
paises.push('canada');
console.log(paises);
console.log('-----------------------');

console.log("Removendo um pais do final do array.");
const retornado = paises.pop();
console.log(paises);
console.log(`Do array [${paises}],foi removido o "${retornado}"`);
console.log('-----------------------');

console.log("Adicionando um pais no inicio do array.");
paises.unshift("frança");
console.log(paises);
console.log('-----------------------');

console.log("Removendo um pais do inicio do array.");
const retorno = paises.shift();
console.log(paises);
console.log(`Do array [${paises}],foi removido o "${retorno}"`);
console.log('-----------------------');

//Ultimo pais
let ultimoPais = paises.length - 1;
console.log(`Ultimo pais do array : "${paises[ultimoPais]}"`);
console.log('-----------------------');

//Segundo pais
console.log(`O segundo pais é : "${paises[1]}"`);
console.log('-----------------------');

//Pais de indice 2
console.log(`O indice 2 é : "${paises[2]}"`);