function rounding (value, precision) {
    if(typeof value !== 'number' || typeof precision !== 'number') {
        throw new TypeError('Оба параметра должным быть числами');
    }
    if(precision < 0){
        precision = 15;
    }
    return parseFloat(value.toFixed(precision))
}
console.log(rounding(3.1415926535897932384, 2))
console.log(rounding(0.12345678, 3))
console.log(rounding(3.1415926535897932384, 9))
console.log(rounding('gg', 9))
