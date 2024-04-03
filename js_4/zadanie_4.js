function progress(n) {
    if (n >= 0 && n <= 100 && n % 10 === 0) {
        let progressBar = Array(10).fill('.');
        let progressPercent = Math.floor(n / 10);

        if (n === 100) {
            progressBar.fill('%');
            console.log(`100% Complete!`);
            console.log(`[%%%%%%%%%%]`)
        } else {
            for (let i = 0; i < progressPercent; i++) {
                progressBar[i] = '%';
            }
            console.log(`${n}% [${progressBar.join('')}]`);
            console.log("Still loading...");
        }
    } else {
        console.log("Число должно быть от 0 до 100 и делиться на 10 без остатка.");
    }
}
progress(30);
progress(100);
