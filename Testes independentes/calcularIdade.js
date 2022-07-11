const pessoa1 = {
    nome: "Alcides",
    idade: 90,
}
const pessoa2 = {
    nome: "Sirlei",
    idade: 85,
}

function calculaIdade(anos) {
    return `daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
console.log(calculaIdade.call(pessoa2,30));