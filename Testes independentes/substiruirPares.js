function substituiPares(array) {
    for (let i = 0; i < array.length; i < i++) {
        if (array[i] === 0) {
            console.log(`${array[i]} Você já é zero!`)
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        } else if (array[i] % 2 !== 0) {
            console.log(`O número ${array[i]} é ímpar...`); {
        }
    }
}
    return array;
}

let arr = [0, 1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituiPares(arr));