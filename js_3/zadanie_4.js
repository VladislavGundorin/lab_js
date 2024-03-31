function wonderfulMatrix(matrix) {
    let rowSums = [];
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        rowSums.push(sum);
    }
    let columnSums = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i];
        }
        columnSums.push(sum);
    }
    let allSumsEqual = true;
    let firstSum = rowSums[0];
    for (let sum of rowSums) {
        if (sum !== firstSum) {
            allSumsEqual = false;
            break;
        }
    }
    for (let sum of columnSums) {
        if (sum !== firstSum) {
            allSumsEqual = false;
            break;
        }
    }
    return allSumsEqual;
}
console.log(wonderfulMatrix([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]]));
console.log(wonderfulMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(wonderfulMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));