function search() {
    var searchText = document.getElementById('searchText').value.toLowerCase();
    var townsList = document.getElementById('towns').getElementsByTagName('li');
    var matches = 0;
    if (searchText.trim() === '') {
        resetStyles(townsList);
        return;
    }
    for (var i = 0; i < townsList.length; i++) {
        var town = townsList[i];
        var townName = town.textContent.toLowerCase();

        if (townName.includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = matches + ' matches found';
}
function resetStyles(townsList) {
    for (var i = 0; i < townsList.length; i++) {
        var town = townsList[i];
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
    }
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
}
