function bloquearPalavrasOfensivas(texto){
    const tudoMinusculo = texto.toLowerCase();
    retorno = tudoMinusculo.includes("carro") || tudoMinusculo.includes("moto") === true ? `Comentário bloqueado por conter palavras proibidas`: `Comentário autorizado`
    console.log(retorno); 
    if(tudoMinusculo.includes("carro") === true){

        console.log("Palavra proibida: carro") 
    }
    if(tudoMinusculo.includes("moto") === true){
        console.log("Palavra proibida: moto");
    }
   
    
    
}
const comentario = "Esse  é  muito perigoso!";
bloquearPalavrasOfensivas(comentario)