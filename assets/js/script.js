const calculatorField = document.querySelector('.calculator-field');
const dataValue = document.querySelectorAll('[data-value]');

dataValue.forEach(data => {
    data.addEventListener('click', function() {
        let dataCalculatorField = calculatorField.innerHTML;
        calculatorField.innerHTML = dataCalculatorField + data.innerHTML;
    });
});

function allClearData() {
    calculatorField.innerHTML = '';
}

function deleteData() {
    calculatorField.innerHTML = calculatorField.innerHTML.toString().slice(0,-1);
}

function equalsData() {
    calculatorField.innerHTML = eval(calculatorField.innerHTML);
}