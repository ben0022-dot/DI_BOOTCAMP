<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Star Wars Character Finder</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
    <div class="container">
        <button id="button">Find Someone!</button>
        
        <div id="content">
            <h1 id="name">Click the button to start!</h1>
            <p>Height: <span id="height"></span></p>
            <p>Gender: <span id="gender"></span></p>
            <p>Birth Year: <span id="birth-year"></span></p>
            <p>Home World: <span id="home-world"></span></p>
        </div>

        <div id="loading" class="hidden">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            <p>Oh, we are searching...</p>
        </div>

        <div id="error" class="hidden">
            <p>Oh No! That person isn't available.</p>
        </div>
    </div>
    <script src="script.js">
        // 1. Get DOM elements
const button = document.getElementById('button');
const nameText = document.getElementById('name');
const heightText = document.getElementById('height');
const genderText = document.getElementById('gender');
const birthYearText = document.getElementById('birth-year');
const homeWorldText = document.getElementById('home-world');
const loadingDiv = document.getElementById('loading');
const contentDiv = document.getElementById('content');
const errorDiv = document.getElementById('error');

// 2. Fetch Data Function
async function getCharacter() {
    toggleLoading(true);
    errorDiv.classList.add('hidden');
    
    try {
        const randomId = Math.floor(Math.random() * 83) + 1;
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        
        if (!response.ok) throw new Error('Character not found');

        const data = await response.json();
        const char = data.result.properties;

        // Fetch Homeworld Name (it's a separate URL)
        const homeRes = await fetch(char.homeworld);
        const homeData = await homeRes.json();
        const homeName = homeData.result.properties.name;

        displayCharacter(char, homeName);
    } catch (error) {
        showError();
    } finally {
        toggleLoading(false);
    }
}

// 3. Display Data Function
function displayCharacter(char, homeName) {
    nameText.innerText = char.name;
    heightText.innerText = char.height;
    genderText.innerText = char.gender;
    birthYearText.innerText = char.birth_year;
    homeWorldText.innerText = homeName;
    contentDiv.classList.remove('hidden');
}

function toggleLoading(isLoading) {
    if (isLoading) {
        loadingDiv.classList.remove('hidden');
        contentDiv.classList.add('hidden');
    } else {
        loadingDiv.classList.add('hidden');
    }
}

function showError() {
    contentDiv.classList.add('hidden');
    errorDiv.classList.remove('hidden');
}

button.addEventListener('click', getCharacter);
    </script>
</body>
</html>