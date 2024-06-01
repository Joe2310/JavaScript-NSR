const cpf = "011.022.03344/0000-40";
function removerCaractere (numero){
    let caracterRemovido = numero.replace("/","").replace("-","").split(".");
    let numeros = "";
    
    for(let item of caracterRemovido){
        numeros += item;
        
    }
    console.log(numeros);
}
removerCaractere(cpf);