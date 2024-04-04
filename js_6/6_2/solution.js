function solve() {
    const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;
    let result = '';
    if (namingConvention === 'Camel Case' || namingConvention === 'Pascal Case') {
        const words = text.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            if (i === 0 && namingConvention === 'Camel Case') {
                result += words[i];
            } else {
                result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
        }
    } else {
        result = 'Error!';
    }
    document.getElementById('result').textContent = result;
}
