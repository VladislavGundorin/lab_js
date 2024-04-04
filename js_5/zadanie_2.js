function city(inputArray) {
    inputArray.forEach(row => {
        let [city, latitude, longitude] = row.split(" | ");
        let cityObject = {
            town: city.trim(),
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(cityObject);
    });
}
let cities = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
];
city(cities);
