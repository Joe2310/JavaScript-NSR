const cpf = "12345678910";
const cnpj = "12345678000145";

function validarEFormatarCpf(cpf){
    if(cpf.length !== 11){
        console.log("Cpf inválido");
    }else {
        const cpfFormmatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
        console.log(cpfFormmatado);
    }
}

function validarEFormatarCnpj(cnpj){
    if(cnpj.length !== 14){
        console.log("Cnpj inválido");
    }else {
        const cnpjFormmatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 15)}`
        console.log(cnpjFormmatado);
    }
}


validarEFormatarCnpj(cnpj)
validarEFormatarCpf(cpf)