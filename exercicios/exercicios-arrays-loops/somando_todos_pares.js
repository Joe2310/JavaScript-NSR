const numeros = [3, 4, 7, 8, 1, 6, 5, 10,2];

let pares = 0;
let impar = 0
for (let numero of numeros){
    if (numero % 2 === 0){
        pares += numero
    }else {
        impar += numero
    }
}
console.log(pares);
console.log(impar);
