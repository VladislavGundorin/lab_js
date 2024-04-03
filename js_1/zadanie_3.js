function checkDivisibility(number) {
    const divisors = [10, 6, 7, 3, 2];

    for (let divisor of divisors) {
        if (number % divisor === 0) {
            console.log(`Число ${number} делится на ${divisor}`);
            return;
        }
    }
    console.log(`Число ${number} не делится`);
}
checkDivisibility(30);
checkDivisibility(12);
checkDivisibility(14);
checkDivisibility(9);
checkDivisibility(4);
checkDivisibility(25);
