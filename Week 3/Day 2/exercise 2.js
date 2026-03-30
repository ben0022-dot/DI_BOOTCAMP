function isBlank(str) {
    return str.length === 0;
}

console.log(isBlank(''));    // true
console.log(isBlank('abc')); // false

function abbrevName(fullName) {
    const nameArray = fullName.split(" "); // ["Robin", "Singh"]
    const firstName = nameArray[0];
    const lastNameInitial = nameArray[1].charAt(0); // "S"
    
    return `${firstName} ${lastNameInitial}.`;
}

console.log(abbrevName("Robin Singh")); // "Robin S."

function swapCase(sentence) {
    let result = "";
    for (let char of sentence) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(swapCase('The Quick Brown Fox')); // 'tHE qUICK bROWN fOX'

function isOmnipresent(arr, val) {
    // .every() returns true only if the condition is true for ALL elements
    return arr.every(subArray => subArray.includes(val));
}

console.log(isOmnipresent([[3, 4], [8, 3, 2], [3]], 3)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1]], 6)); // false

let table = document.body.firstElementChild;

// table.rows gives us an array-like collection of all <tr> elements
for (let i = 0; i < table.rows.length; i++) {
    // We access the specific cell at the same index as the row
    let targetCell = table.rows[i].cells[i];
    
    // Apply the style directly via the DOM
    targetCell.style.backgroundColor = "red";
}

