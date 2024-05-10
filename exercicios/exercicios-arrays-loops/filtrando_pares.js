const original = [1, 4, 12, 21, 53, 88, 112,10,12,15,14];

let pares = [];
let impar = [];
for (let numero of original){
    if (numero % 2 === 0){
        pares.push(numero)
    }else {
        impar.push(numero)
    }
}
console.log(pares);
console.log(impar);