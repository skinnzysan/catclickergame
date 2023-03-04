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

function addScore(amount) {
  animation();
  score += amount;
  document.getElementById("coins").innerHTML = score;
}

setInterval(function() {
  score = score + cursorAmount + catLadyAmount * 5;
  if (scorepersec >= 1) {
    animation();
  }
  document.getElementById("coins").innerHTML = score;
}, 1000);

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

let catLadyCost = 100;
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

function buySkin(catname) {
  if (catname.bought === "no" && score >= catname.price) {
    score -= catname.price;
    catname.bought = "yes";
    document.getElementById("coins").innerHTML = score;
    document.getElementById("popcatbought").innerHTML = "Bought";

    selectedcat = catname.name;
    document.getElementById("cat").src = "cats/" + selectedcat + "/1.png";
  } else if (catname.bought === "yes") {
    selectedcat = catname.name;
    document.getElementById("cat").src = "cats/" + selectedcat + "/1.png";
  }
}

// Save game system

setInterval(function saveGame() {
  let gameSave = {
    score: score,
    scorepersec: scorepersec,
    cursorCost: cursorCost,
    cursorAmount: cursorAmount,
    catLadyCost: catLadyCost,
    catLadyAmount: catLadyAmount,
    selectedcat: selectedcat,
    popcatbought: popcat.bought
  };

  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}, 10000);

window.onload = function loadGame() {
  let savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.score !== "undefined") {
    score = savedGame.score;
  }
  if (typeof savedGame.scorepersec !== "undefined") {
    scorepersec = savedGame.scorepersec;
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
  if (typeof savedGame.selectedcat !== "undefined") {
    selectedcat = savedGame.selectedcat;
  }
  if (typeof savedGame.popcatbought !== "undefined") {
    popcat.bought = savedGame.popcatbought;
  }

  document.getElementById("coins").innerHTML = savedGame.score;
  document.getElementById("persec").innerHTML = savedGame.scorepersec;
  document.getElementById("cursorCost").innerHTML = savedGame.cursorCost;
  document.getElementById("cursorAmount").innerHTML = savedGame.cursorAmount;
  document.getElementById("catLadyCost").innerHTML = savedGame.catLadyCost;
  document.getElementById("catLadyAmount").innerHTML = savedGame.catLadyAmount;
  if (savedGame.popcatbought === "yes") {
    document.getElementById("popcatbought").innerHTML = "Bought";
  }
};
