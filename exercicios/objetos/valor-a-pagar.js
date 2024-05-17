
const consumo = [{ 
    nome: "salgado",
    precoUnit: 200,
    quantidade: 5
  },{ 
    nome: "cerveja",
    precoUnit: 1000,
    quantidade: 2
  },{ 
    nome: "agua",
    precoUnit: 500,
    quantidade: 1
  }]

const cartao = {
    nome: "Joe",
    idade: 25,
    consumo
    
}
console.log(cartao);

let valorTotal = (0);
for(let item of consumo){
    let valor=  item.precoUnit * item.quantidade
    valorTotal += valor
    console.log(item.nome + " " + (valor / 100).toFixed(2));
}
console.log(`Sr(a) ${cartao.nome}, o valor total a pagar é R$ ${(valorTotal/ 100).toFixed(2)}`);