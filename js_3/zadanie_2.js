function genericElement(firstArray, secondArray){
    const commonElements = [];
    for(let i = 0; i < firstArray.length; i++){
        if(secondArray.includes(firstArray[i]) && !commonElements.includes(firstArray[i])){
            commonElements.push(firstArray[i]);
        }
    }
    if(commonElements.length > 0){
        console.log(commonElements.join(', '));
    } else {
        console.log('нет общих');
    }
}
genericElement(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
genericElement(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't'])