const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComecadosComA = [];
for( let nome of nomes ){
    const inicial = nome[0]
    if(inicial === "a" || inicial === "A"){
        nomesComecadosComA.push(nome);
    }
}
console.log(nomesComecadosComA);