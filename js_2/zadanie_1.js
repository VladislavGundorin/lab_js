function sumNumber(number){
    let digits = number.toString().split('');
    let sum = 0;
    for(let i = 0; i < digits.length; i++){
        sum += parseInt(digits[i])
    }
    return sum;
}
console.log(sumNumber(245678));
console.log(sumNumber(97561));
console.log(sumNumber(543));