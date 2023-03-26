// Animation

function animation() {
  document.getElementById("cat").src = "cats/" + selectedcat + "/2.png";
  setTimeout(function pet2() {
    document.getElementById("cat").src = "cats/" + selectedcat + "/1.png";
  }, 100);
}

// Score

let score = 0;
let scorepersec = 0;
let clickPower = 1;

function addScore() {
  animation();
  score += clickPower;
  document.getElementById("coins").innerHTML = score;
}

setInterval(function() {
  score = score + cursorAmount + (catLadyAmount * 5) + (catTowerAmount * 10) + (catHouseAmount * 100) + (catSkyScraperAmount * 500) + (catCountryAmount * 1250) + (catContinentAmount * 2500) + (catPlanetAmount * 10000);
  if (scorepersec >= 1) {
    animation();
  }
  document.getElementById("coins").innerHTML = score;
}, 1000);

// Cat Paws

let catPawCost = 150;
let catPawAmount = 0;

function buyCatPaw() {
  if (score >= catPawCost) {
    score -= catPawCost;
    catPawCost = Math.round(catPawCost * 1.15);
    clickPower++;
    catPawAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catPawCost").innerHTML = catPawCost;
    document.getElementById("catPawAmount").innerHTML = catPawAmount;
  }
}

// Cursors

let cursorCost = 15;
let cursorAmount = 0;

function buyCursor() {
  if (score >= cursorCost) {
    score -= cursorCost;
    scorepersec++;
    cursorCost = Math.round(cursorCost * 1.15);
    cursorAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("cursorCost").innerHTML = cursorCost;
    document.getElementById("cursorAmount").innerHTML = cursorAmount;
  }
}

// Cat Ladies

let catLadyCost = 115;
let catLadyAmount = 0;

function buyCatLady() {
  if (score >= catLadyCost) {
    score -= catLadyCost;
    scorepersec += 5;
    catLadyCost = Math.round(catLadyCost * 1.15);
    catLadyAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catLadyCost").innerHTML = catLadyCost;
    document.getElementById("catLadyAmount").innerHTML = catLadyAmount;
  }
}

// Cat Towers

let catTowerCost = 1150;
let catTowerAmount = 0;

function buyCatTower() {
  if (score >= catTowerCost) {
    score -= catTowerCost;
    scorepersec += 10;
    catTowerCost = Math.round(catTowerCost * 1.15);
    catTowerAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catTowerCost").innerHTML = catTowerCost;
    document.getElementById("catTowerAmount").innerHTML = catTowerAmount;
  }
}

// Cat Houses

let catHouseCost = 15000;
let catHouseAmount = 0;

function buyCatHouse() {
  if (score >= catHouseCost) {
    score -= catHouseCost;
    scorepersec += 100;
    catHouseCost = Math.round(catHouseCost * 1.15);
    catHouseAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catHouseCost").innerHTML = catHouseCost;
    document.getElementById("catHouseAmount").innerHTML = catHouseAmount;
  }
}

// Cat SkyScrapers

let catSkyScraperCost = 60000;
let catSkyScraperAmount = 0;

function buyCatSkyScraper() {
  if (score >= catSkyScraperCost) {
    score -= catSkyScraperCost;
    scorepersec += 500;
    catSkyScraperCost = Math.round(catSkyScraperCost * 1.15);
    catSkyScraperAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catSkyScraperCost").innerHTML = catSkyScraperCost;
    document.getElementById("catSkyScraperAmount").innerHTML = catSkyScraperAmount;
  }
}

// Cat Countries

let catCountryCost = 125000;
let catCountryAmount = 0;

function buyCatCountry() {
  if (score >= catCountryCost) {
    score -= catCountryCost;
    scorepersec += 1250;
    catCountryCost = Math.round(catCountryCost * 1.15);
    catCountryAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catCountryCost").innerHTML = catCountryCost;
    document.getElementById("catCountryAmount").innerHTML = catCountryAmount;
  }
}

// Cat Continents

let catContinentCost = 200000;
let catContinentAmount = 0;

function buyCatContinent() {
  if (score >= catContinentCost) {
    score -= catContinentCost;
    scorepersec += 2500;
    catContinentCost = Math.round(catContinentCost * 1.15);
    catContinentAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catContinentCost").innerHTML = catContinentCost;
    document.getElementById("catContinentAmount").innerHTML = catContinentAmount;
  }
}

// Cat Planets

let catPlanetCost = 500000;
let catPlanetAmount = 0;

function buyCatPlanet() {
  if (score >= catPlanetCost) {
    score -= catPlanetCost;
    scorepersec += 10000;
    catPlanetCost = Math.round(catPlanetCost * 1.15);
    catPlanetAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catPlanetCost").innerHTML = catPlanetCost;
    document.getElementById("catPlanetAmount").innerHTML = catPlanetAmount;
  }
}

// Skins

let selectedcat = "petcat";

let petcat = {
  name: "petcat",
  bought: "yes",
  price: 0
};

let popcat = {
  name: "popcat",
  bought: "no",
  price: 250
};

let wigglecat = {
  name: "wigglecat",
  bought: "no",
  price: 1000
};

let maxwellcat = {
  name: "maxwellcat",
  bought: "no",
  price: 25000
};

function buySkin(catname) {
  if (catname.bought === "no" && score >= catname.price) {
    score -= catname.price;
    catname.bought = "yes";
    document.getElementById("coins").innerHTML = score;
    
    if (catname === "popcat") {
      document.getElementById("popcatbought").innerHTML = "Bought";
    }
    else if (catname === "wigglecat") {
      document.getElementById("wigglecatbought").innerHTML = "Bought";
    }
    else if (catname === "maxwellcat") {
      document.getElementById("maxwellcatbought").innerHTML = "Bought";
    }

    selectedcat = catname.name;
    document.getElementById("cat").src = "cats/" + selectedcat + "/1.png";
  } else if (catname.bought === "yes") {
    selectedcat = catname.name;
    document.getElementById("cat").src = "cats/" + selectedcat + "/1.png";
  }
}

// Save game system

function saveGame() {
  let gameSave = {
    score: score,
    scorepersec: scorepersec,
    clickPower: clickPower,
    catPawCost: catPawCost,
    catPawAmount: catPawAmount,
    cursorCost: cursorCost,
    cursorAmount: cursorAmount,
    catLadyCost: catLadyCost,
    catLadyAmount: catLadyAmount,
    catTowerCost: catTowerCost,
    catTowerAmount: catTowerAmount,
    catHouseAmount: catHouseAmount,
    catHouseCost: catHouseCost,
    catSkyScraperAmount: catSkyScraperAmount,
    catSkyScraperCost: catSkyScraperCost,
    catCountryAmount: catCountryAmount,
    catCountryCost: catCountryCost,
    catContinentAmount: catContinentAmount,
    catContinentCost: catContinentCost,
    catPlanetAmount: catPlanetAmount,
    catPlanetCost: catPlanetCost,
    selectedcat: selectedcat,
    popcatbought: popcat.bought
  };

  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

setInterval(function() {
  saveGame();
}, 10000);

window.onload = function loadGame() {
  let savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.score !== "undefined") {
    score = savedGame.score;
  }
  if (typeof savedGame.scorepersec !== "undefined") {
    scorepersec = savedGame.scorepersec;
  }
  if (typeof savedGame.clickPower !== "undefined") {
    clickPower = savedGame.clickPower;
  }
  if (typeof savedGame.catPawCost !== "undefined") {
    catPawCost = savedGame.catPawCost;
  }
  if (typeof savedGame.catPawAmount !== "undefined") {
    catPawAmount = savedGame.catPawAmount;
  }
  if (typeof savedGame.cursorCost !== "undefined") {
    cursorCost = savedGame.cursorCost;
  }
  if (typeof savedGame.cursorAmount !== "undefined") {
    cursorAmount = savedGame.cursorAmount;
  }
  if (typeof savedGame.catLadyCost !== "undefined") {
    catLadyCost = savedGame.catLadyCost;
  }
  if (typeof savedGame.catLadyAmount !== "undefined") {
    catLadyAmount = savedGame.catLadyAmount;
  }
  if (typeof savedGame.catTowerCost !== "undefined") {
    catTowerCost = savedGame.catTowerCost;
  }
  if (typeof savedGame.catTowerAmount !== "undefined") {
    catTowerAmount = savedGame.catTowerAmount;
  }
  if (typeof savedGame.catHouseCost !== "undefined") {
    catHouseCost = savedGame.catHouseCost;
  }
  if (typeof savedGame.catHouseAmount !== "undefined") {
    catHouseAmount = savedGame.catHouseAmount;
  }
  if (typeof savedGame.catSkyScraperCost !== "undefined") {
    catSkyScraperCost = savedGame.catSkyScraperCost;
  }
  if (typeof savedGame.catSkyScraperAmount !== "undefined") {
    catSkyScraperAmount = savedGame.catSkyScraperAmount;
  }
  if (typeof savedGame.catCountryCost !== "undefined") {
    catCountryCost = savedGame.catCountryCost;
  }
  if (typeof savedGame.catCountryAmount !== "undefined") {
    catCountryAmount = savedGame.catCountryAmount;
  }
  if (typeof savedGame.catContinentCost !== "undefined") {
    catContinentCost = savedGame.catContinentCost;
  }
  if (typeof savedGame.catContinentAmount !== "undefined") {
    catContinentAmount = savedGame.catContinentAmount;
  }
  if (typeof savedGame.catPlanetCost !== "undefined") {
    catPlanetCost = savedGame.catPlanetCost;
  }
  if (typeof savedGame.catPlanetAmount !== "undefined") {
    catPlanetAmount = savedGame.catPlanetAmount;
  }
  if (typeof savedGame.selectedcat !== "undefined") {
    selectedcat = savedGame.selectedcat;
  }
  if (typeof savedGame.popcatbought !== "undefined") {
    popcat.bought = savedGame.popcatbought;
  }
  

  document.getElementById("coins").innerHTML = savedGame.score;
  document.getElementById("persec").innerHTML = savedGame.scorepersec;
  document.getElementById("catPawCost").innerHTML = savedGame.catPawCost;
  document.getElementById("catPawAmount").innerHTML = savedGame.catPawAmount;
  document.getElementById("cursorCost").innerHTML = savedGame.cursorCost;
  document.getElementById("cursorAmount").innerHTML = savedGame.cursorAmount;
  document.getElementById("catLadyCost").innerHTML = savedGame.catLadyCost;
  document.getElementById("catLadyAmount").innerHTML = savedGame.catLadyAmount;
  document.getElementById("catTowerCost").innerHTML = savedGame.catTowerCost;
  document.getElementById("catTowerAmount").innerHTML = savedGame.catTowerAmount;
  document.getElementById("catHouseCost").innerHTML = savedGame.catHouseCost;
  document.getElementById("catHouseAmount").innerHTML = savedGame.catHouseAmount;
  document.getElementById("catSkyScraperCost").innerHTML = savedGame.catSkyScraperCost;
  document.getElementById("catSkyScraperAmount").innerHTML = savedGame.catSkyScraperAmount;
  document.getElementById("catCountryCost").innerHTML = savedGame.catCountryCost;
  document.getElementById("catCountryAmount").innerHTML = savedGame.catCountryAmount;
  document.getElementById("catContinentCost").innerHTML = savedGame.catContinentCost;
  document.getElementById("catContinentAmount").innerHTML = savedGame.catContinentAmount;
  document.getElementById("catPlanetCost").innerHTML = savedGame.catPlanetCost;
  document.getElementById("catPlanetAmount").innerHTML = savedGame.catPlanetAmount;
  if (savedGame.popcatbought === "yes") {
    document.getElementById("popcatbought").innerHTML = "Bought";
  }
};

// Debug cheats

function n7x6ff(amount) {
  score += amount;
}