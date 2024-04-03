function matrixN(n){
    let row = ''
    for(let i = 0;i < n;i++){
        for(let j = 0; j < n; j++){
            row += n +' ';
        }
        console.log(row);
        row = "";
    }
}
matrixN(3);
matrixN(7);
matrixN(2);