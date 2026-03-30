// 1. Create the objects with methods
const person1 = {
    fullName: "Sarah Miller",
    mass: 65,    // in kg
    height: 1.65, // in meters
    // The BMI method
    calcBMI: function() {
        // 'this' refers to person1
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const person2 = {
    fullName: "Dan Walker",
    mass: 80,
    height: 1.80,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// 2. Create the comparison function
function compareBMI(p1, p2) {
    // We call the methods to calculate the values first
    const bmi1 = p1.calcBMI();
    const bmi2 = p2.calcBMI();

    if (bmi1 > bmi2) {
        console.log(`${p1.fullName} has the largest BMI: ${bmi1.toFixed(2)}`);
    } else if (bmi2 > bmi1) {
        console.log(`${p2.fullName} has the largest BMI: ${bmi2.toFixed(2)}`);
    } else {
        console.log("Both have the same BMI.");
    }
}

// Run the function
compareBMI(person1, person2);

// Part 1 & 2: Calculation Function
function findAvg(gradesList) {
    let sum = 0;

    for (let grade of gradesList) {
        sum += grade;
    }

    const average = sum / gradesList.length;
    console.log("The average is:", average);
    
    // We return the average so the next function can use it
    return average;
}

// Part 3 & 4: Logic Function
function checkPassing(grades) {
    // This function calls findAvg and stores the result in a variable
    const result = findAvg(grades);

    if (result > 65) {
        console.log("Congratulations! You passed.");
    } else {
        console.log("I'm sorry, you failed and must repeat the course.");
    }
}

// Testing the code
const myGrades = [85, 90, 60, 75, 40];
checkPassing(myGrades);