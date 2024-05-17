const pessoa = {
    nome: "Joe",
    idade: 25,
    cidade: "serrinha",
    estado:"Bahia"
}
let carro = {
    nomeCarro:"corsa",
    cor:"azul",
    ano:"2009"
}


let objeto = {
    ...pessoa,
    ...carro,
    novaPrpiedade : 50
}
console.log(objeto);