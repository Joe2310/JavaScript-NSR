const email = "a.@";


function validacaoDeEmail(email){

    const indexArroba = email.indexOf("@")
    const indexPonto = email.indexOf(".",indexArroba)
    const ponto = email.includes(".");
    const arroba = email.includes("@");
    
    
    const ultimoIndex = email.length - 1;
    let pontoFinal = email.slice(ultimoIndex);
    
    const primeiroIndex = email[0];
    
    
    if(pontoFinal === "." || primeiroIndex === "." || ponto === false || arroba === false){
        console.log("E-mail inválido");
    }else {
        console.log("valido");
    }
}

validacaoDeEmail(email);


// if(indexPonto > indexArroba){
//     console.log("Email completo");
// }else {
//     console.log("Nao atende aos requisitos.");
// }