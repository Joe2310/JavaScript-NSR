function data(dia,mes,ano){
    const diaFormatado = String(dia).padStart(2,"0");
    const mesFormatado = String(mes).padStart(2,"0");
    return  console.log(`${diaFormatado}/${mesFormatado}/${ano}`)

}

data(1,2,2024)