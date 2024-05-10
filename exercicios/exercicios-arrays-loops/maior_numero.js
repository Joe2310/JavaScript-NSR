const numeros = [3, 24, 1, 8, 11, 7, 15];

let indice = 0;

for(let item of numeros){
        if (item > indice){
            indice = item
        }
}
console.log(indice);