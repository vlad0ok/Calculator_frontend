const firstNumberInput = document.querySelector('.container input:nth-of-type(1)');
const operationSelect = document.getElementById('operation');
const secondNumberInput = document.querySelector('.container input:nth-of-type(2)');
const resultOutput = document.createElement('p');
const countButton = document.getElementById('btn');
const container = document.querySelector('.container');

function calculate() {
    const num1 = parseFloat(firstNumberInput.value);
    const num2 = parseFloat(secondNumberInput.value);
    let result;

    switch (operationSelect.value) {
        case 'add':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'delit':
            result = num1 / num2;
            break;
        default:
            result = 'Choose operation';
    }

    resultOutput.textContent = `Result: ${result}`;
}

countButton.addEventListener('click', calculate);

container.appendChild(resultOutput);
