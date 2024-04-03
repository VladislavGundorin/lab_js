function minOfThree([first, second], third) {
    const numbers = [first, second, third];
    return Math.min(...numbers);
}
console.log(minOfThree([2, 5], 3));
console.log(minOfThree([600, 342], 123));
console.log(minOfThree([25, 21], 4));
