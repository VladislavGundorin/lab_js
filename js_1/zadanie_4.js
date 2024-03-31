function calculatePrice(numberOfPeople, groupType, dayOfWeek) {
    const prices = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46
        },
        'Corporate': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50
        }
    };
    let basePricePerPerson = prices[groupType][dayOfWeek];

    let finalPrice = numberOfPeople * basePricePerPerson;
    if (groupType === 'Students' && numberOfPeople >= 30) {
        finalPrice *= 0.85;
    } else if (groupType === 'Corporate' && numberOfPeople >= 100) {
        finalPrice = (numberOfPeople - 10) * basePricePerPerson;
    } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        finalPrice *= 0.95;
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

calculatePrice(30, "Students", "Sunday");
calculatePrice(40, "Regular", "Saturday");
