// Math.random() * 100 gives 0 to 99.99. + 1 makes it 1 to 100.
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Number chosen:", randomNum);

for (let i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

function capitalize(str) {
    let evenCaps = "";
    let oddCaps = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i].toLowerCase();
        } else {
            evenCaps += str[i].toLowerCase();
            oddCaps += str[i].toUpperCase();
        }
    }
    return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

function isPalindrome(word) {
    // Split into array, reverse array, join back to string
    const reversed = word.split("").reverse().join("");
    return word.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("hello")); // false

function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) return 0;

    let max = -Infinity; // Start with the lowest possible value

    for (let item of arrayNumber) {
        if (typeof item === 'number' && item > max) {
            max = item;
        }
    }
    
    // If no numbers were found in a non-empty array
    return max === -Infinity ? 0 : max;
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2]));      // 4

function uniqueElements(list) {
    // A Set only allows unique values. 
    // We spread it back into an array using [...]
    return [...new Set(list)];
}

console.log(uniqueElements([1,2,3,3,3,3,4,5])); // [1, 2, 3, 4, 5]

function createCalendar(year, month) {
    const mon = month - 1; // JS months are 0-11
    const d = new Date(year, mon);
    
    let table = document.createElement('table');
    table.border = "1";
    
    // 1. Create Headers
    let headerRow = "<tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr>";
    table.innerHTML = headerRow;

    let tr = document.createElement('tr');

    // 2. Spaces for the first week (e.g., if month starts on Wednesday)
    // getDay() returns 0 for Sunday, 1 for Monday... 
    // We adjust to make Monday = 0
    let dayOfWeek = d.getDay() === 0 ? 6 : d.getDay() - 1;

    for (let i = 0; i < dayOfWeek; i++) {
        tr.appendChild(document.createElement('td'));
    }

    // 3. Fill the days
    while (d.getMonth() === mon) {
        let td = document.createElement('td');
        td.textContent = d.getDate();
        tr.appendChild(td);

        // If it's Sunday (index 6), start a new row
        if (d.getDay() === 0) {
            table.appendChild(tr);
            tr = document.createElement('tr');
        }

        d.setDate(d.getDate() + 1);
    }

    // 4. Final Row cleanup
    if (tr.children.length > 0) {
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}

createCalendar(2012, 9);

