var currentNumberWrapper = document.getElementById('currentNumberWrapper');

var currentNumber = 0;

var x = 0

function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
}