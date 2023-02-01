// CALCULATOR ARRAY

let calculator = []

// DISPLAY 

const display = document.getElementById('display');
display.innerHTML = 0

// OPERATORS

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplicate = document.getElementById('multiplicate');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const restart = document.getElementById('restart');

plus.addEventListener('click', e => {
    calculator.push(plus.innerText)

    display.innerHTML = calculator.join('')
})

minus.addEventListener('click', e => {
    calculator.push(minus.innerText)

    display.innerHTML = calculator.join('')
})

multiplicate.addEventListener('click', e => {
    calculator.push(multiplicate.innerText)

    display.innerHTML = calculator.join('')
})

divide.addEventListener('click', e => {
    calculator.push(divide.innerText)

    display.innerHTML = calculator.join('')
})

restart.addEventListener('click', e => {
    calculator = []

    display.innerText = 0;
})

equal.addEventListener('click', e => {
    const searchPlus = calculator.find(n => n == '+');
    if (searchPlus) {
        calculator = calculator.join('').split('+')
        calculator = calculator.reduce( (first, second) => {

            let res = parseInt(first) + parseInt(second)

            if (!Number(res)) {
                calculator = []
                return display.innerText = 'error'
            }

            calculator = [res]

            return display.innerText = calculator
        })
    }

    const searchMinus = calculator.find(n => n == '-');
    if (searchMinus) {
        calculator = calculator.join('').split('-')
        calculator = calculator.reduce( (first, second) => {
            let res = parseInt(first) - parseInt(second)

            if (!Number(res)) {
                calculator = []
                return display.innerText = 'error'
            }

            calculator = [res]

            return display.innerText = calculator
        })
    }

    const searchMultiplicate = calculator.find(n => n == '*');
    if (searchMultiplicate) {
        calculator = calculator.join('').split('*')
        calculator = calculator.reduce( (first, second) => {
            let res = parseInt(first) * parseInt(second)

            if (!Number(res)) {
                calculator = []
                return display.innerText = 'error'
            }

            calculator = [res]

            return display.innerText = calculator
        })
    }

    const searchDivide = calculator.find(n => n == '/');
    if (searchDivide) {
        calculator = calculator.join('').split('/')
        calculator = calculator.reduce( (first, second) => {
            let res = parseInt(first) / parseInt(second)

            if (!Number(res)) {
                calculator = []
                return display.innerText = 'error'
            }

            calculator = [res]

            return display.innerText = calculator
        })
    }
})

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
    calculator.push(parseInt(one.innerText))

    display.innerHTML = calculator.join('')
})

one.addEventListener('click', e => {
    calculator.push(parseInt(one.innerText))

    display.innerHTML = calculator.join('')
})

two.addEventListener('click', e => {
    calculator.push(parseInt(two.innerText))

    display.innerHTML = calculator.join('')
})

three.addEventListener('click', e => {
    calculator.push(parseInt(three.innerText))

    display.innerHTML = calculator.join('')
})

four.addEventListener('click', e => {
    calculator.push(parseInt(four.innerText))

    display.innerHTML = calculator.join('')
})

five.addEventListener('click', e => {
    calculator.push(parseInt(five.innerText))

    display.innerHTML = calculator.join('')
})

six.addEventListener('click', e => {
    calculator.push(parseInt(six.innerText))

    display.innerHTML = calculator.join('')
})

seven.addEventListener('click', e => {
    calculator.push(parseInt(seven.innerText))

    display.innerHTML = calculator.join('')
})

eight.addEventListener('click', e => {
    calculator.push(parseInt(eight.innerText))

    display.innerHTML = calculator.join('')
})

nine.addEventListener('click', e => {
    calculator.push(parseInt(nine.innerText))

    display.innerHTML = calculator.join('')
})