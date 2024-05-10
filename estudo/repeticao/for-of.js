const nomes = ['jose','maria',"joao"];

for (let nome of nomes){
    console.log(nome + ' Aprovado');
}
let aluno = 'marcos'
let encon = false;
for (let letra of nomes){
    if(letra  === aluno){
        encon = true
        break;
    }
}
if (!encon){
    console.log( aluno + ' Reprovado');
}
console.log('-----------------------------');
console.log('Verificando se tem uma letra especifica no texto');
const palavra = 'painho';
let encontrado = false;
for (let letra of palavra){
    if(letra  === 'h'){
        console.log('Tem a letra h');
        encontrado = true
        break;
    }
}
if (!encontrado){
    console.log('Não tem a letra h');
}