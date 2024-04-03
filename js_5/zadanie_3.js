function updateInventory(store, delivery) {
    let inventory = {};
    const addOrUpdate = (item, quantity) => {
        if (inventory[item]) {
            inventory[item] += parseInt(quantity);
        } else {
            inventory[item] = parseInt(quantity);
        }
    };
    for (let i = 0; i < store.length; i += 2) {
        addOrUpdate(store[i], store[i+1]);
    }
    for (let i = 0; i < delivery.length; i += 2) {
        addOrUpdate(delivery[i], delivery[i+1]);
    }
    for (let product in inventory) {
        console.log(`${product} -> ${inventory[product]}`);
    }
}
let currentStock = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
];
let delivery = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
];
updateInventory(currentStock, delivery);
