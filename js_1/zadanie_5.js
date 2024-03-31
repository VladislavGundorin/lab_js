function checkingYear(number){
    if ((number % 4 == 0 && number % 100 != 0) || (number % 400 == 0)){
        return 'yes';
    }else {
        return 'no';
    }
}
console.log(checkingYear(1984))
console.log(checkingYear(2003))
console.log(checkingYear(4))