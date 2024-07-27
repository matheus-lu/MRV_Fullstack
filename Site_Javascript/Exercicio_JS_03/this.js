function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
};


const pessoa1 = {
        nome: 'Matheus',
        idade: 24,
};

const pessoa2 = {
        nome: 'Fernando',
        idade: 25,
};

const animal = {
        nome: 'Scooby',
        idade: 5,
        raca: 'pitbull',
};

console.log(calculaIdade.call(pessoa1, 26));
console.log(calculaIdade.apply(pessoa2, [52]));
console.log(calculaIdade.call(animal, 4));