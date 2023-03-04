let score = 0;
let scorepersec = 0;

let cursorCost = 15;
let cursorAmount = 0;

let catLadyCost = 100;
let catLadyAmount = 0;

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

function addScore(amount) {
  animation();
  score += amount;
  document.getElementById("coins").innerHTML = score;
}

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

function buyCatLady() {
  if (score >= catLadyCost) {
    score -= catLadyCost;
    scorepersec += 2;
    catLadyCost = Math.round(catLadyCost * 1.15);
    catLadyAmount++;

    document.getElementById("coins").innerHTML = score;
    document.getElementById("persec").innerHTML = scorepersec;
    document.getElementById("catLadyCost").innerHTML = catLadyCost;
    document.getElementById("catLadyAmount").innerHTML = catLadyAmount;
  }
}

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

function animation() {
  document.getElementById("cat").src = "cats/" + selectedcat + "/2.png";
  setTimeout(function pet2() {
    document.getElementById("cat").src = "cats/" + selectedcat + "/1.png";
  }, 100);
}

setInterval(function() {
  score = score + cursorAmount + catLadyAmount * 2;
  if (scorepersec >= 1) {
    animation();
  }
  document.getElementById("coins").innerHTML = score;
}, 1000);
