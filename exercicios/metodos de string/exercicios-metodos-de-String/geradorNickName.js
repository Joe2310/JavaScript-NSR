const nome = 'Guido Cerqueira   ';

function geradorNickName(nome){
    nomeFormatado = nome.trim().toLowerCase().split(" ");
    let nickName = ""; 
    for (const item of nomeFormatado) {
        nickName += item;
    }
    
    console.log(`@${nickName.slice(0,12)}`);
}
geradorNickName(nome)