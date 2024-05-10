const numeros = [0,2,4,6,8,10]

//FOR tradicional
let soma = 0;
for (let i = 0; i< numeros.length; i++) {
        soma = soma + numeros[i]
        //soma += numeros[i];
}
console.log(soma)


//FOR OF
let valor = 0;
for(let item of numeros){
    valor += item
}
console.log(valor);