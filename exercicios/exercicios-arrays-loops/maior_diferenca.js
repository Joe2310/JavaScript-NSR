const numeros = [8, 11,15, 4, 1];

let maiorDif = Number.MIN_VALUE;
for (let x of numeros){
    for( let y of numeros){
        const difAtual = x - y;

        if(difAtual > maiorDif){
            maiorDif = difAtual;
        }
    }
}
console.log(maiorDif);