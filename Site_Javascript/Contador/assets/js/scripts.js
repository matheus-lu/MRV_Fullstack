var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var decrementButton = document.getElementById('decrementBtn');
var incrementButton = document.getElementById('incrementBtn');

function increment () {
    currentNumber = currentNumber + 1;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'grey';
    }
    currentNumberWrapper.innerHTML = currentNumber;
};

function decrement () {
    currentNumber = currentNumber - 1;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
    currentNumberWrapper.innerHTML = currentNumber;
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);