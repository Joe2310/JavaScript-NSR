const original = [5, 7, 13, 17, 26, 34, 118, 245,11,19];

let resultado = [];
for (let item of original){
    if(item >= 10 && item <= 20 || item >= 100){
        resultado.push(item)
        
    }
}
console.log(resultado);