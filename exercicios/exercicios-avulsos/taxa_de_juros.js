const montante = 90000;
const capital = 60000; 
const tempo = 24;

const taxaDeJuros = (montante/capital) ** (1/tempo) - 1;

console.log(`A taxa de juros do financiamneto foi de ${(taxaDeJuros * 100).toFixed(2)} %`);

