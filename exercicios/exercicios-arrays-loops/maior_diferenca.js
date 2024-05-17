const numeros = [8, 11,15, 4, 13];

let maiorDif = Number.MIN_VALUE;
for (let x of numeros){
    for( let y of numeros){
        const difAtual = x - y;
console.log(difAtual);
        if(difAtual > maiorDif){
            maiorDif = difAtual;
        }
    }
}
console.log(maiorDif)