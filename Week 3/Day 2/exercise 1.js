function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let numbersFound = "";

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbersFound += i + " ";
            sum += i;
        }
    }
    console.log(`Numbers divisible by ${divisor}: ${numbersFound}`);
    console.log(`Sum: ${sum}`);
}

displayNumbersDivisible(); // Default 23
displayNumbersDivisible(3); // Bonus version

const stock = { "banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry": 1 };
const prices = { "banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry": 10 };
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0;

    for (let item of shoppingList) {
        // Check if item exists in stock and quantity > 0
        if (item in stock && stock[item] > 0) {
            totalPrice += prices[item];
            // Bonus: Decrease stock
            stock[item] -= 1;
        }
    }
    return totalPrice;
}

console.log("Total Bill:", myBill());

function changeEnough(itemPrice, amountOfChange) {
    const quarters = amountOfChange[0] * 0.25;
    const dimes = amountOfChange[1] * 0.10;
    const nickels = amountOfChange[2] * 0.05;
    const pennies = amountOfChange[3] * 0.01;

    const totalChange = quarters + dimes + nickels + pennies;

    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true

function hotelCost() {
    let nights;
    while (isNaN(nights) || nights <= 0) {
        nights = prompt("How many nights at the hotel?");
    }
    return nights * 140;
}

function planeRideCost() {
    let destination = "";
    while (destination === "" || !isNaN(destination)) {
        destination = prompt("Where are you going?");
    }
    
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days;
    while (isNaN(days) || days <= 0) {
        days = prompt("How many days for the car rental?");
    }
    
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // 5% discount
    }
    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car cost: $${car}.`);
    return hotel + plane + car;
}

totalVacationCost();

