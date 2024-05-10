const nome = ['joe','jose','carlos','joao']

console.log("Com WHILE");
let indice = 0;
while (indice < nome.length) {
    console.log(nome[indice])
    indice++;
}
console.log('---------------');

console.log("Com FOR");
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}