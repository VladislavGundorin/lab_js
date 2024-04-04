function subtract() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result = firstNumber - secondNumber;
    document.getElementById('result').innerText = result;
}
