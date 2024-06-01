const texto = "Aprenda programar do zero na Cubos Academy";


function formatarTexto(texto){
    
    let resultado = "";
    for (let item of texto ){
        let formatado = item.replace(" ","-");
        resultado += formatado;
    }
    console.log(resultado.toLowerCase());
}
formatarTexto(texto)