const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "a"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "b",
            correta: "e"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva (prova){
    let acerto = 0;
    for (let res of prova.questoes){
            if (res.resposta === res.correta){
            acerto += 1  
            }
        }
        let valorDaProva = prova.valor / prova.questoes.length;
        let notaDaProva = valorDaProva * acerto
console.log(`O aluno(a) ${prova.aluno} acertou ${acerto} questões e obteve nota ${notaDaProva}`);
}

corrigirProva(prova)

