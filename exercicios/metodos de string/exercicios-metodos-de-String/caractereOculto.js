const numeroCartao = '1111222233334444';

function caractereOculto(numeroCartao){
    const numerosIniciais = numeroCartao.slice(0,4);
    const numerosFinais = numeroCartao.slice(12);
    const numeroCartaoFormatado = `${numerosIniciais.padEnd(12,"*")}${numerosFinais}`
    console.log(numeroCartaoFormatado);
 
}
caractereOculto(numeroCartao)