function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op === '+') {
        add(a, b);
    } else if (op === '-') {
        subtract(a, b);
    } else if (op === 'x') {
        multiply(a, b);
    } else if (op === '/') {
        divide(a, b);
    }

}

const num1 = 1
const num2 = 2
const operator = ''

function display(value) {
    const display_div = document.querySelector('#display');
    display_div.textContent = value;
    num2 = value;
}

const btn_ops = document.querySelectorAll('.operator');
btn_ops.forEach(btn => {
    btn.addEventListener("click", () => {
        num1 = parseInt(btn.textContent);
        display(num1);
    });
});

