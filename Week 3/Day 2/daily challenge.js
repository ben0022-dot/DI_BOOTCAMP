// 1. Data Structure: Array of objects for planets and moon counts
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Select the section where planets will be appended
const section = document.querySelector(".listPlanets");

// 3. Loop through the planets array
planets.forEach((planet) => {
    
    // Create the planet <div>
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    
    // 4. Bonus: Create moons for each planet
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        /* Logic for Moon Placement:
           Since .planet has 'position: relative' and .moon has 'position: absolute',
           we move the moons so they don't all sit on top of each other.
        */
        moonDiv.style.left = (i * 10) + "px"; 
        
        planetDiv.appendChild(moonDiv);
    }

    // 5. Append the planet (containing its moons) to the section
    section.appendChild(planetDiv);
});