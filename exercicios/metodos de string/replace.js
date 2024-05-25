//SUBSTITUI A STRING

const numero = "97.50.00";
let valor1 = numero.replace(".",",");

let resultado = "";
for(let item of numero){
    let valor = item.replace(".",",");
    resultado += valor
    
}


console.log(numero);
console.log(`Primeiro encontrado: ${valor1}` );
console.log(`Resultado de um for: ${resultado}`);