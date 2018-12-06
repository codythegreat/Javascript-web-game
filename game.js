let rewards = [
  ['Tools', 25, 1.1, 0],
  ['Shack', 50, 1, 1],
  ['House', 100, 1, 3],
  ['Factory', 200, 2, 0],
  ['Laboratory', 350, 3.5, 3]
];
let climates = [
  ['Radiated Sunshine', 1],
  ['Ash Overcast', .8],
  ['Deadly Winds', .5],
  ['Acid Rain', .3],
  ['Nuclear Winter', .1]
];
let inventoryItems = [
  ['ammo', 15],
  ['leather', 15],
  ['batteries', 20],
  ['electronics', 25],
  ['sheet metal', 5],
  ['wood', 5],
];
let randomEvents = [
  {
    text: 'A survivor was shot in combat. -1 survivor',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: -1,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A starving survivor was rescued. +1 survivor',
    scrapProdChange: 1,
    foodProdChange: 1,    
    survivorChange: 1,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A crate of food was discovered. +10 food',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 10,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A large crate of food was discovered. +25 food',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 25,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A stash of scrap was discovered. +10 scrap',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 10,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A large stash of scrap was discovered. +25 scrap',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 25,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'Morale has been boosted. +50% daily scrap discovery',
    scrapProdChange: 1.5,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 3,
  },
  {
    text: 'Morale has been boosted. +50% daily food discovery',
    scrapProdChange: 1,
    foodProdChange: 1.5,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 3,
  },
  {
    text: 'The following item was scavenged: ',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: 1,
    timer: 1,
  },
  {
    text: 'The following items were scavenged: ',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: 2,
    timer: 1,
  },
  {
    text: 'The following items were scavenged: ',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 0,
    inventoryChange: 3,
    timer: 1,
  },
  {
    text: 'Your colony has contracted praire fever. -20% scrap and food production',
    scrapProdChange: .8,
    foodProdChange: .8,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 1,
    inventoryChange: null,
    timer: 3,
  },
  {
    text: 'Your colony has contracted radiation sickness. -50% scrap and food production',
    scrapProdChange: .5,
    foodProdChange: .5,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 0,
    diseaseChange: 2,
    inventoryChange: null,
    timer: 3,
  }
];

class Colony {
  constructor() {
    this.name = '';
    this.scrap = 0;
    this.food = 1000;
    this.scrapMultiplier = 1
    this.rewards = [];
    this.survivors = 1;
    this.foodPurchases = 0;
    this.inventory = [];
    this.tempScrapProd = 1;
    this.tempFoodProd = 1;
    this.disease = 0;
    this.randomEventTimer = 0;
    // this.maximumScrap = 1000
  }
  updateScrap(scrp) {
    this.scrap += scrp;
  }
  consume() {
  	this.food = this.food - (this.survivors * Math.floor(Math.random()*4));
  }
  updateStatsNewestReward(reward) {
    this.scrapMultiplier *= reward[2];
    this.survivors += reward[3];
  }
  updateStatsAllRewards() {
    newScrapMultiplier = 1;
    newSurvivors = 1;
    for (let reward of this.rewards) {
      newScrapMultiplier *= reward[2];
      newSurvivors += reward[3]
    }
    this.scrapMultiplier = newScrapMultiplier;
    this.survivors = newSurvivors;
  }
  addReward(reward) {
    if (this.scrap >= reward[1] && (this.allowedPopulation - this.survivors) >= reward[3]) {
      this.rewards.push(reward);
      this.updateStatsNewestReward(reward);
      this.updateScrap(-reward[1]);
      return true;
    } else {
      return false;
    }
  }
  get allowedPopulation() {
    return 1 + Math.floor(this.scrap / 10000) + Math.floor(this.food / 1000); 
  }
  buyFood() {
  	if (this.scrap >= 100 * (this.foodPurchases + 1)) {
  	  this.food += 1000;
  	  this.scrap -= 100 * (this.foodPurchases + 1);
  	  this.foodPurchases++;
  	  return true;
  	} else {
      return false;
  	}
  }
}

class GameState {
  constructor() {
  	this.currentDay = 1;
    this.foodCost = 100 * 1;
    this.wanderingSurvivors = 20;
    this.climate = climates[0];
    this.progressBoard = document.getElementById('game-progress-text');
    this.scrapCounter = document.getElementById('colony-scrap-text');
    this.foodCounter = document.getElementById('colony-food-text');
    this.foodButtonText = document.getElementById('food-cost');
    this.populationCounter = document.getElementById('colony-pop-text');
    this.colonyName = document.getElementById('colony-name-text');
    this.gameStatsDisplay = document.getElementById('game-stats-text');
    this.randomEventDisplay = document.getElementById('random-event-text');
    this.inventoryDisplay = document.getElementById('inventory-display');
  }
  updateScrapCounter() {
    this.scrapCounter.textContent = `${colony.scrap.toFixed()} Scrap`;
  }
  updateFoodCounter() {
  	this.foodCounter.textContent = `${colony.food} Food`;
  }
  updateFoodButton() {
  	this.foodButtonText.textContent = `${(colony.foodPurchases + 1) * 100} scrap for 1000 food.`
  }
  updatePopCounter() {
  	this.populationCounter.textContent = `${colony.survivors} Survivors`;
  }
  updateGameStats() {
  	this.gameStatsDisplay.textContent = `Day: ${this.currentDay} Climate: ${this.climate[0]}`;
  }
  buildProgressBoardElement(reward) {
    this.progressBoard.textContent += ` ${reward[0]} |`;
  }
  incrementDay() {
  	this.currentDay++;
  	this.climate = climates[Math.floor(Math.random()*5)];
  }
}

let game = new GameState;
let colony = new Colony;

const completeAllRewardRequirements = (reward) => {
	if (colony.addReward(reward) == true) {
    game.buildProgressBoardElement(reward);
    game.updateScrapCounter();
    game.updatePopCounter();
	} else {alert('You do not meet the requirements for this item.')}
}

const completeAllBuyFoodRequirements = () => {
	if (colony.buyFood() == true) {
    game.updateFoodCounter();
    game.updateFoodButton();
    game.updateScrapCounter();
	}
} 

const initColonyWithName = () => {
  colonyName = document.getElementById('colony-name-input').value;
  if (colonyName != '') {
    colony.name = colonyName;
    if (colonyName.length <= 20) {
      game.colonyName.textContent = `Name: ${colonyName}`;
    } else {
      game.colonyName.textContent = `Name: ${colonyName.substring(0,20)}...`;
    }
    game.updateFoodCounter();
    game.updateScrapCounter();
    game.updatePopCounter();
    game.updateGameStats();
  } else {
    alert('Please type a name for your colony.');
  }
}

const gameOverIfZeroFood = () => {
	if (colony.food <= 0) {
	  alert('You have run out of food. Game over.');
	  document.getElementById('add-points').style.visibility = "hidden";
	}
}

const gameOverIfZeroSurvivors = () => {
  if (colony.survivors == 0) {
    alert('Your survivors have perished. Play again, you may get further!');
    document.getElementById('add-points').style.visibility = 'hidden';
  }
}

const scrapAmountAllVariables = () => {
  return colony.survivors * colony.scrapMultiplier * colony.tempScrapProd * game.climate[1];
}

const advanceOneGameDay = () => {
  if (colony.randomEventTimer > 0) {colony.randomEventTimer--;}
  else {
    colony.tempScrapProd = 1;
    colony.tempFoodProd = 1;
    colony.disease = 0;
    game.randomEventDisplay.textContent = '';
  }
  if (colony.name != '') {
  colony.updateScrap(scrapAmountAllVariables());
  colony.consume();
  game.incrementDay();
  game.updateScrapCounter();
  game.updateFoodCounter();
  game.updatePopCounter();
  game.updateGameStats();
  gameOverIfZeroFood();
  gameOverIfZeroSurvivors();
  } else {alert('Please name your colony.');}
}

const pointButtonLoading = () => {
  document.getElementById("add-points").disabled = true;
  document.getElementById("add-points").textContent = "Loading";
  setTimeout(function() {
    document.getElementById("add-points").disabled = false;
    document.getElementById("add-points").textContent = "Advance One Day";
  }, 2000);
}

const addElementForInventoryItem = (item) => {
  let btn = document.createElement('button');
  let btnTextNode = document.createTextNode(`${item[0]} | sell for ${item[1]} scrap`);
  btn.appendChild(btnTextNode);
  btn.className = "btn btn-warning";
  btn.type = "button";
  btn.style.marginBottom = "10px";
  game.inventoryDisplay.appendChild(btn);
  btn.onclick = function() {
    colony.scrap += item[1];
    btn.parentNode.removeChild(btn);
    game.updateScrapCounter();
  }
}

const addRandomEvent = () => {
  let randomEvent = randomEvents[Math.floor(Math.random()*randomEvents.length)];
  colony.tempScrapProd = randomEvent.scrapProdChange;
  colony.tempFoodProd = randomEvent.foodProdChange;
  colony.survivors += randomEvent.survivorChange;
  colony.scrap += randomEvent.scrapChange;
  colony.food += randomEvent.foodChange;
  colony.disease = randomEvent.diseaseChange;
  colony.randomEventTimer = randomEvent.timer;
  let inventoryItemsAdded = '';
  let item = [];
  for (let i = 0; i < randomEvent.inventoryChange; i++) {
    item = inventoryItems[Math.floor(Math.random()*inventoryItems.length)];
    colony.inventory += item;
    inventoryItemsAdded += item[0] + ', ';
    addElementForInventoryItem(item);
  }
  game.randomEventDisplay.textContent = randomEvent.text + inventoryItemsAdded.substring(0, inventoryItemsAdded.length - 2);
}

const chanceOfRandomEventIfTimerZero = () => {
  if (colony.randomEventTimer == 0) {
    if (Math.ceil(Math.random()*5) == 5) {
      addRandomEvent();
    }
  }
}

document.getElementById('buy-food').addEventListener("click", function(){ 
  completeAllBuyFoodRequirements();
});

document.getElementById("add-colony-name").addEventListener("click", function(){
  initColonyWithName();
  document.getElementById("add-colony-name").style.visibility = "hidden";
  document.getElementById("colony-name-input").style.visibility = "hidden";
});

document.getElementById("add-points").addEventListener("click", function(){
  chanceOfRandomEventIfTimerZero(); 
  pointButtonLoading();
  setTimeout(function() {
    advanceOneGameDay();
  }, 1900);
});

document.getElementById('add-tools').addEventListener("click", function(){ 
  completeAllRewardRequirements(rewards[0]);
});

document.getElementById('add-shack').addEventListener("click", function(){ 
  completeAllRewardRequirements(rewards[1]);
});

document.getElementById('add-house').addEventListener("click", function(){ 
  completeAllRewardRequirements(rewards[2]);
});

document.getElementById('add-factory').addEventListener("click", function(){ 
  completeAllRewardRequirements(rewards[3]);
});

document.getElementById('add-lab').addEventListener("click", function(){ 
  completeAllRewardRequirements(rewards[4]);
});
