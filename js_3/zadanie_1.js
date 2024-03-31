function replacement(masiv){
    let sumBaseArray = 0;
    let sumModifiedArray = 0;
    for(let i = 0; i < masiv.length; i++){
        sumBaseArray += masiv[i];
        if (masiv[i] % 2 == 0){
            masiv[i] +=i;
        }else{
            masiv[i] -=i;
        }
        sumModifiedArray += masiv[i]
    }
    console.log(masiv)
    console.log(sumBaseArray)
    console.log(sumModifiedArray)
}
replacement([5, 15, 23, 56, 35])
replacement([-5, 11, 3, 0, 2])
