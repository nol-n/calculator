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
    return b === 0 ? "NICE TRY" : a / b;
}

function operate(op, a, b) {
    if (op === '+') {
        displayNum = add(a, b);
    } else if (op === '-') {
        displayNum = subtract(a, b);
    } else if (op === 'x') {
        displayNum = multiply(a, b);
    } else if (op === '/') {
        displayNum = divide(a, b);
    }
    display(displayNum);

}

let num = '';
let operand = '';
let displayNum = '';

function display(value) {
    const displayText = document.querySelector('#displaytext');
    displayText.textContent = value;
}

const btn_nums = document.querySelectorAll('.operator');
btn_nums.forEach(btn => {
    btn.addEventListener("click", () => {
        num += btn.textContent;
        display(num);
    });
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener("click", () => {
    if (num.includes('.')) {
        //do nothing
    }

    if (!num.includes('.')) {
        num += '.';
        display(num);
    }
});

function removeActiveClass() {
    btn_operands.forEach(btn => {
        btn.classList.remove('active');
    });
}


const btn_operands = document.querySelectorAll('.operand');
btn_operands.forEach(btn => {
    btn.addEventListener("click", function() {
        if (!displayNum) {
            operand = btn.textContent;
            displayNum = +num;
            num = '';
        } else if (!num) {
            operand = btn.textContent;
        } 
        else {
            intNum = +num;
            operate(operand, displayNum, intNum);
            operand = btn.textContent;
            num = '';
        }
        removeActiveClass(); // Remove 'active' class from all operands
        this.classList.add('active');
    });
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (!num || !displayNum) {
        //do nothing
    } else {
        intNum = +num;
        operate(operand, displayNum, intNum);
        num = '';
    }
    removeActiveClass();
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    num = '';
    displayNum = '';
    display(displayNum);
})