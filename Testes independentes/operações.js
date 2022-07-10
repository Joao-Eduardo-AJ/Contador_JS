function comparaNumeros(a, b) {
    const primeiraFrase = criaPrimeiraFrase(a, b);
    const segundaFrase = criaSegundaFrase(a, b);
    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(a, b) {
    let saoIguais = '';

    if (a !== b) {
        saoIguais = 'não';
    }

    return `Os números ${a} e ${b} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(a, b) {
    const soma = a + b;
    let resultado10;
    let resultado20;

    if (soma > 10) {
        resultado10 = 'maior';
    } else {
        resultado10 = 'menor';
    }
    if (soma > 20) {
        resultado20 = 'maior';
    } else {
        resultado20 = 'menor';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros(12, 3));