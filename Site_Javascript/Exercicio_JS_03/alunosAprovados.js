function calculaMedia(listaAlunos, mediaFinal) {
    let alunosAprovados = [];
    for (let i = 0; i < listaAlunos.length; i++) {
        const {nota, nome} = listaAlunos[i];
        
        if(nota >= mediaFinal) {
            alunosAprovados.push(nome)
        }
    }
    return alunosAprovados
}
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
];

console.log(calculaMedia(alunos, 5))