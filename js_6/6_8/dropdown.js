function addItem() {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;
    const menu = document.getElementById('menu');

    const option = document.createElement('option');
    option.text = text;
    option.value = value;
    menu.appendChild(option);
}
