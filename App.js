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

    // Create the game screen
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    console.log('Screen Switch')


    // Display the first Allien Ship
    const AlienShip1 = new AlienShip("First Ship", getRandomAlienStat(3,6), getRandomAlienStat(2,4), getRandomAlienAccuracy(.6,.8));
    console.log(AlienShip1)

    // 
}



