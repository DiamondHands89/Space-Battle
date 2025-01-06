const homeScreen = document.querySelector('.home');
const gameScreen = document.querySelector('.game');
const USSassembly = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    maxHull: 20
}

class AlienShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}


// Alien Hull 3-6
// Alien Firepower 2-4
// Alien Accuracy .6-.8

// Random Hull and Firepower
function getRandomAlienStat(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random Accuracy
function getRandomAlienAccuracy(min, max) {
    const accuracy = Math.random() * (max - min) + min;
    return Math.round(accuracy * 10) / 10;
    
}

const alienShips = [];
let currentAlienIndex = 0;
let lives = 3;

// Begin the round
function startRound() {
    const scoreboard = document.querySelector('.scoreboard');
    const gameDisplay = document.querySelector('.gameDisplay');
    const controls = document.querySelector('.controls')

    // Create the game screen
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    console.log('Screen Switch');


    // 


    // Display USS Assembly
    const USSassemblyImage = document.createElement('div');
    gameDisplay.appendChild(USSassemblyImage);
    USSassemblyImage.style.border = '1px solid green';
    USSassemblyImage.style.height = '150px';
    USSassemblyImage.style.width = '150px';
    USSassemblyImage.style.backgroundImage = "url('USSassembly.webp')";
    USSassemblyImage.style.backgroundSize = 'cover';
    console.log(USSassemblyImage);

    // Create and Display Alien Ships
    for (let i = 1; i <= 6; i++) {
        const newAlienShip = new AlienShip(`Alien Ship ${i}`, getRandomAlienStat(3, 6), getRandomAlienStat(2, 4), getRandomAlienAccuracy(0.6, 0.8));
        alienShips.push(newAlienShip);
    }

    // Display first alien ship
    displayCurrentAlienShip();
}


function displayCurrentAlienShip() {
    const gameDisplay = document.querySelector('.gameDisplay')

    // Remove any existing alien ships
    const existingAlienShipImage = document.querySelector('.alienShipImage');
    if (existingAlienShipImage) {
        gameDisplay.removeChild(existingAlienShipImage);
    }

    // Display the current Alien Ship
    if (currentAlienIndex < alienShips.length) {
        const activeAlienShip = alienShips[currentAlienIndex]; 
        const alienShipImage = document.createElement('div'); 
        alienShipImage.classList.add('alienShipImage'); 
        gameDisplay.appendChild(alienShipImage); 
        alienShipImage.style.border = '1px solid purple'; 
        alienShipImage.style.height = '150px'; 
        alienShipImage.style.width = '150px'; 
        alienShipImage.style.backgroundImage = "url('download.png')"; 
        alienShipImage.style.backgroundSize = 'cover'; 
        alienShipImage.style.backgroundPosition = 'center center'; 
        console.log(alienShipImage);
    }
}


function fire() {
    const activeAlienShip = alienShips[currentAlienIndex];
    const hit = Math.random();
    console.log("Shot fired");

    if (hit <= USSassembly.accuracy) {
        activeAlienShip.hull -= USSassembly.firepower;
        console.log(`Hit! ${activeAlienShip.name} ship hull is now ${activeAlienShip.hull}`);

        if (activeAlienShip.hull <= 0) {
            console.log(`${activeAlienShip.name} destroyed`);
            currentAlienIndex++;
            if (currentAlienIndex >= alienShips.length) {
                console.log("All ships destroyed!");
                // Win Screen
            }
            // Ship destruction logic
        }
    } else {
        console.log("Missed!");
    }

    if (currentAlienIndex < alienShips.length) {
        alienCounterStrike();
    }
}
    

function alienCounterStrike() {
    const activeAlienShip = alienShips[currentAlienIndex];
    console.log("Alien Counterstrike")

    if (activeAlienShip.hull > 0) {
        const counterHit = Math.random();
        if (counterHit <= activeAlienShip.accuracy) {
            USSassembly.hull -= activeAlienShip.firepower;
            console.log("You've been hit!")
            console.log(USSassembly)

            if (USSassembly.hull <= 0) {
                console.log("USS Assembly destroyed!");
                // USS ASSembly Destruction logic
            }
        } else {
            console.log('Alien missed!');
        }
    }
    
}

