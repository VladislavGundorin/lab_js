function calculator(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '%':
            result = number1 / number2;
            break;
        default:
            console.log("Неверный оператор");
            return;
    }
    console.log(result.toFixed(2));
}
calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(10, '%', 6);
