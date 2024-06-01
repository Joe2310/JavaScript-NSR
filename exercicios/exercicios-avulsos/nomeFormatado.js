function nomeFormatado(nome){
    const quebraDeNome = nome.split(" ");
    
    let formatado = "";
    for(let item of quebraDeNome){
        
        let primeiraLetra = item.slice(0,1);
        let restanteDoNome = item.slice(1)
       
        formatado += primeiraLetra.toLocaleUpperCase() + restanteDoNome + " "
    
    }
    return console.log(formatado);

}
const texto = "jose maria  silva";
nomeFormatado(texto);