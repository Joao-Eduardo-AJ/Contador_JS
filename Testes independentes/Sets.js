const meuArray = [30, 30, 40, 5, 226, 2049, 3034, 5];

function valoresUnicos(arr) {
    const meuSet = new Set(arr);

    return meuSet;
}
console.log(valoresUnicos(meuArray));