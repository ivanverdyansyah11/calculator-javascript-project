const buttonCalc = document.querySelectorAll('button');
const inputCalc = document.querySelector('.calculator-field');
const dataNumber = document.querySelectorAll("[data-number]");
const dataOperator = document.querySelectorAll("[data-operator]");

// buttonCalc.forEach(e => {
//     e.addEventListener('click', function(i) {
//         let dataNumber = i.target.getAttribute("data-number");
//         let dataOperator = i.target.getAttribute("data-operator");
//         let inputData = inputCalc.innerHTML;
//         inputCalc.innerHTML = inputData + dataNumber;
//     });
// });