const homeScreen = document.querySelector('.home');
const gameScreen = document.querySelector('.game');
const USSassembly = {
    hull: 20,
    firepower: 5,
    accuracy: .7
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
    console.log(USSassemblyImage);


    // Display the first Allien Ship
    const AlienShip1 = new AlienShip("First Ship", getRandomAlienStat(3,6), getRandomAlienStat(2,4), getRandomAlienAccuracy(.6,.8));
    const AlienShipImage = document.createElement('div');
    gameDisplay.appendChild(AlienShipImage);
    AlienShipImage.style.border = '1px solid purple';
    AlienShipImage.style.height = '150px';
    AlienShipImage.style.width = '150px';
    console.log(AlienShipImage)


    // 
}



