const nomeArquivo = 'Foto da.jpeg Familia.jpeg';



function validarArquivo(arquivo){
    
    let retornoDaExtencao = arquivo.slice(arquivo.lastIndexOf(".") + 1 )
    
    if(retornoDaExtencao === "jpg" || retornoDaExtencao === "jpeg" || retornoDaExtencao === "png" || retornoDaExtencao === "gif"){
    console.log("Arquivo válido");
    }else {
        console.log("Arquivo inválido");
    }
    
}

validarArquivo(nomeArquivo)
