const alunos = [
    {
        nome: 'João',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Lucas',
        nota: 3,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 7,
        turma: '2C',
    }
];

function alunosAprovados(nomes, media) {
    let aprovados = [];

    for (let i = 0; i < nomes.length; i++) {
        const { nota, nome } = nomes[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados
}
console.log(alunosAprovados(alunos, 7));