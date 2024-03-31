function age(number){
    if (number < 0){
        throw new Error("Возраст не может быть отрицательным")
    }
    else if(number >= 0 && number <= 2) {
        return "младенец";
    }else if(number >= 3 && number <= 13){
        return "ребенок";
    }else if(number >= 14 && number <= 19){
        return "подросток";
    }else if(number >= 20 && number <= 65){
        return "взрослый";
    }else {
        return "пожилой";
    }
}
console.log(age(20));
console.log(age(1));
console.log(age(100));
console.log(age(-1));
