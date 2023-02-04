// CALCULATOR ARRAY

let calculator = []

// DISPLAY 

const display = document.getElementById('display');
display.innerText = 0

// OPERATORS

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplicate = document.getElementById('multiplicate');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const restart = document.getElementById('restart');
const percentage = document.getElementById('onePercentage');

percentage.addEventListener('click', e => {
    display.innerText = parseInt(calculator.join('')) / 100
    calculator = []
})

plus.addEventListener('click', e => {
    returnResult(plus.innerText)
})

minus.addEventListener('click', e => {
    returnResult(minus.innerText)
})

multiplicate.addEventListener('click', e => {
    returnResult(multiplicate.innerText)
})

divide.addEventListener('click', e => {
    returnResult(divide.innerText)
})

restart.addEventListener('click', e => {
    calculator = []

    display.innerText = 0;
})

equal.addEventListener('click', e => {
    equalF()
})

// FUNCTIONS

function returnResult (value) {
    const sPlus = calculator.find(n => n == "+")
    const sMinus = calculator.find(n => n == "-")
    const sMultiplicate = calculator.find(n => n == "*")
    const sDivide = calculator.find(n => n == "/")

    if (sPlus || sMinus || sMultiplicate || sDivide) {
        equalF()
    }

    calculator.push(value)
}

function equalF () {
    const sPlus = calculator.find(n => n == "+")
    const sMinus = calculator.find(n => n == "-")
    const sMultiplicate = calculator.find(n => n == "*")
    const sDivide = calculator.find(n => n == "/")

    if (sPlus) {
        let res = calculator.join('').split('+').reduce((f, s) => parseInt(f) + parseInt(s))
        display.innerText = res
        return calculator = [res]
    }

    if (sMinus) {
        let res = calculator.join('').split('-').reduce((f, s) => parseInt(f) - parseInt(s))
        display.innerText = res
        return calculator = [res]
    }

    if (sMultiplicate) {
        let res = calculator.join('').split('*').reduce((f, s) => parseInt(f) * parseInt(s))
        display.innerText = res
        return calculator = [res]
    }

    if (sDivide) {
        let res = calculator.join('').split('/').reduce((f, s) => parseInt(f) / parseInt(s))
        display.innerText = res
        return calculator = [res]
    }
}

function numberAction (value) {
    const sPlus = calculator.find(n => n == "+")
    const sMinus = calculator.find(n => n == "-")
    const sMultiplicate = calculator.find(n => n == "*")
    const sDivide = calculator.find(n => n == "/")

    if (sPlus) {
        calculator.push(parseInt(value))
        let a = calculator.join('').split('+')
        return display.innerText = a[1]
    }

    if (sMinus) {
        calculator.push(parseInt(value))
        let a = calculator.join('').split('-')
        return display.innerText = a[1]
    }

    if (sMultiplicate) {
        calculator.push(parseInt(value))
        let a = calculator.join('').split('*')
        return display.innerText = a[1]
    }

    if (sDivide) {
        calculator.push(parseInt(value))
        let a = calculator.join('').split('/')
        return display.innerText = a[1]
    }

    calculator.push(parseInt(value))

    display.innerHTML = calculator.join('')
}

// NUMBERS DECLARATION AND EVENTS

const cero = document.getElementById('numberCero');
const one = document.getElementById('numberOne');
const two = document.getElementById('numberTwo');
const three = document.getElementById('numberThree');
const four = document.getElementById('numberFour');
const five = document.getElementById('numberFive');
const six = document.getElementById('numberSix');
const seven = document.getElementById('numberSeven');
const eight = document.getElementById('numberEight');
const nine = document.getElementById('numberNine');

cero.addEventListener('click', e => {
    numberAction(parseInt(cero.innerText))
})

one.addEventListener('click', e => {
    numberAction(parseInt(one.innerText))
})

two.addEventListener('click', e => {
    numberAction(parseInt(two.innerText))

})

three.addEventListener('click', e => {
    numberAction(parseInt(three.innerText))
})

four.addEventListener('click', e => {
    numberAction(parseInt(four.innerText))
})

five.addEventListener('click', e => {
    numberAction(parseInt(five.innerText))
})

six.addEventListener('click', e => {
    numberAction(parseInt(six.innerText))
})

seven.addEventListener('click', e => {
    numberAction(parseInt(seven.innerText))
})

eight.addEventListener('click', e => {
    numberAction(parseInt(eight.innerText))
})

nine.addEventListener('click', e => {
    numberAction(parseInt(nine.innerText))
})