const celular = "7199918888";


function formatarCelular(numero){
    let formatado;
    if(numero.length === 8){
        formatado = `9 ${numero.slice(0,4)}-${numero.slice(4)}`
        console.log(formatado);
    } else if(numero.length === 9){
        formatado = `${numero.slice(0,1)} ${numero.slice(1,5)}-${numero.slice(5)}`
        console.log(formatado);
    }else if(numero.length === 10){
        formatado = `(${numero.slice(0,2)}) 9  ${numero.slice(2,6)}-${numero.slice(6)}`
        console.log(formatado);
    }else {
        formatado = `(${numero.slice(0,2)}) ${numero.slice(2,3)}  ${numero.slice(3,7)}-${numero.slice(7)}`
        console.log(formatado);
    }
    
    
}
formatarCelular(celular);