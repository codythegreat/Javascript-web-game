import 'game-data';

let tierOneRewards = [
  ['Tools', 25],
  ['Binoculars', 50],
  ['Wheel Barrel', 100],
  ['Metal Detectors', 200],
  ['Power Tools', 400],
  ['Trucks', 800],
  ['GPS Mapping', 1600],
  ['Drones', 3200]
]
let rewards = [
  ['Tools', 25, 1.05, 0],
  ['Shack', 50, 1, 1],
  ['House', 100, 1, 3],
  ['Factory', 200, 2, 0],
  ['Laboratory', 350, 3.5, 3]
];
let ranchRandomEvents = [
  {
    text: 'A couple of chickens were harvested. +50 food',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 50,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A pig was harvested. +100 food',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 100,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
  {
    text: 'A cow was harvested. +250 food',
    scrapProdChange: 1,
    foodProdChange: 1,
    survivorChange: 0,
    scrapChange: 0,
    foodChange: 250,
    diseaseChange: 0,
    inventoryChange: null,
    timer: 1,
  },
];
let tierOneFoodRewards = [
  ['Planters', 20],
  ['Robust Pots', 40],
  ['Nutritional Soil', 80],
  ['Lights', 160],
  ['Rain Collector', 320],
  ['Pesticides', 640],
  ['GMO Plants', 1280],
  ['Camera Monitoring', 2560],
];
let foodRewards = [
  ['Planter', 20, 1.05, 0],
  ['Garden', 40, 1.12, 20],
  ['Green House', 100, 1.25, 0],
  ['Farm', 250, 2, 200],
  ['Ranch', 1000, .25, 400],	//ranch looks bad on paper, but this also adds random events to harvest animals.
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
    this.scrap = 50;
    this.scrapMultiplier = 1;
    this.food = 100;
    this.foodMultiplier = 1;
    this.rewards = [];
    this.survivors = 3;
    this.foodPurchases = 0;
    this.inventory = [];
    this.tempScrapProd = 1;
    this.tempFoodProd = 1;
    this.disease = 0;
    this.randomEventTimer = 0;
    this.tierOneItems = 0;
    this.tierOneFoodItems = 0;
    // this.maximumScrap = 1000
  }
  updateScrap(scrp) {
    this.scrap += scrp;
  }
  updateFood(fd) {
    this.food += fd;
  }
  consume() {
  	this.food = this.food - (this.survivors * Math.floor(Math.random()*2));
  }
  updateStatsNewestReward(reward) {
    this.scrapMultiplier *= reward[2];
    this.survivors += reward[3];
  }
  updateStatsNewestFoodReward(reward) {
    this.foodMultiplier *= reward[2];
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
  addTierOneReward(reward) {
    if (this.scrap >= reward[1]) {
      this.rewards.push(reward);
      this.scrapMultiplier *= 1.05;
      this.updateScrap(-reward[1]);
      this.tierOneItems++;
      return true;
    } else {
      return false;
    }
  }
  addTierOneFoodReward(reward) {
    if (this.scrap >= reward[1]) {
      this.rewards.push(reward);
      this.foodMultiplier *= 1.05;
      this.updateScrap(-reward[1]);
      this.tierOneFoodItems++;
      return true;
    } else {
      return false;
    }
  }
  addReward(reward) {
    if (this.scrap >= reward[1] && ((this.allowedPopulation - this.survivors) >= reward[3] || reward[3] == 0)) {
      this.rewards.push(reward);
      this.updateStatsNewestReward(reward);
      this.updateScrap(-reward[1]);
      return true;
    } else {
      return false;
    }
  }
  addFoodReward(reward) {
    if (this.scrap >= reward[1] && this.food >= reward[3]) {
      this.rewards.push(reward);
      this.updateStatsNewestFoodReward(reward);
      this.updateScrap(-reward[1]);
      this.updateFood(-reward[3]);
      return true;
    } else {
      return false;
    }
  }
  get allowedPopulation() {
    return 1 + Math.floor(this.scrap / 10000) + Math.floor(this.food / 100); 
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
    this.currentToolReward = 0;
    this.currentFoodReward = 0;
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
  	this.foodCounter.textContent = `${colony.food.toFixed()} Food`;
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
	} else {alert('You do not meet the requirements for this item.');}
}

const completeAllFoodRewardRequirements = (reward) => {
  if (colony.addFoodReward(reward) == true) {
    game.buildProgressBoardElement(reward);
    game.updateScrapCounter();
    game.updateFoodCounter();
  } else {alert('You do not meet the requirements for this item.');}
}

const completeAllBuyFoodRequirements = () => {
    if (colony.buyFood() == true) {
    game.updateFoodCounter();
    game.updateFoodButton();
    game.updateScrapCounter();
    } else {alert('You do not meet the requirements for this item.');}
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
const foodAmountAllVariables = () => {
  return colony.survivors * colony.foodMultiplier * colony.tempFoodProd * game.climate[1];	
}

const resetRandomEventVariables = () => {
  colony.tempScrapProd = 1;
  colony.tempFoodProd = 1;
  colony.disease = 0;
  game.randomEventDisplay.textContent = '';
}

const advanceOneGameDay = () => {
  if (colony.randomEventTimer > 0) {colony.randomEventTimer--;}
  else {
    resetRandomEventVariables();
  }
  if (colony.name != '') {
    if(document.getElementById('scrap-radio').checked) {
      colony.updateScrap(scrapAmountAllVariables());
    } else {colony.updateFood(foodAmountAllVariables());}
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
  }, 1000);
}

const addElementForInventoryItem = (item) => {
  let btn = document.createElement('button');
  let btnTextNode = document.createTextNode(`${item[0]} | sell for ${item[1]} scrap`);
  btn.appendChild(btnTextNode);
  btn.className = "btn btn-warning";
  btn.type = "button";
  btn.style.marginBottom = "10px";
  btn.style.width = "100%";
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

const updateFoodRewardButtonElement = () => {
  document.getElementById('add-food-tier-1').textContent = `Add ${tierOneFoodRewards[colony.tierOneFoodItems][0]}`;
  document.getElementById('add-food-tier-1-cost').textContent = `5% food efficiency boost | ${tierOneFoodRewards[colony.tierOneFoodItems][1]} scrap`;
}

const updateRewardButtonElement = () => {
  document.getElementById('add-tools').textContent = `Add ${tierOneRewards[colony.tierOneItems][0]}`;
  document.getElementById('add-tools-text').textContent = `5% scrap efficiency boost | ${tierOneRewards[colony.tierOneItems][1]} scrap`;
}

document.getElementById('buy-food').addEventListener("click", function(){ 
  completeAllBuyFoodRequirements();
});

document.getElementById("add-colony-name").addEventListener("click", function(){
  initColonyWithName();
  document.getElementById("add-colony-name").style.visibility = "hidden";
  document.getElementById("colony-name-input").style.visibility = "hidden";
  document.getElementById("add-points").style.visibility = "inherit";
  document.getElementById("scrap-radio").style.visibility = "inherit";
  document.getElementById("food-radio").style.visibility = "inherit";
  document.getElementById("label-scrap-radio").style.visibility = "inherit";
  document.getElementById("label-food-radio").style.visibility = "inherit";
});

document.getElementById("add-points").addEventListener("click", function(){
  chanceOfRandomEventIfTimerZero(); 
  pointButtonLoading();
  setTimeout(function() {
    advanceOneGameDay();
  }, 900);
});

document.getElementById('add-tools').addEventListener("click", function(){ 
  if (tierOneRewards[colony.tierOneItems]) {
    if (colony.addTierOneReward(tierOneRewards[colony.tierOneItems])) {
      game.buildProgressBoardElement(tierOneRewards[colony.tierOneItems - 1]);
      game.updateScrapCounter();
      game.updatePopCounter();
      updateRewardButtonElement();
    } else {alert('You do not meet the requirements for this item.');}
  } else {
    alert("You've purchased all of the rewards available.");
  }
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

document.getElementById('add-food-tier-1').addEventListener("click", function(){ 
  if (tierOneFoodRewards[colony.tierOneFoodItems]) {
    if (colony.addTierOneFoodReward(tierOneFoodRewards[colony.tierOneFoodItems])) {
      game.buildProgressBoardElement(tierOneFoodRewards[colony.tierOneFoodItems - 1]);
      game.updateScrapCounter();
      game.updatePopCounter();
      updateFoodRewardButtonElement();
    } else {alert('You do not meet the requirements for this item.');}
  } else {
    alert("You've purchases all of the rewards available.");
  }
});

document.getElementById('add-garden').addEventListener("click", function(){ 
  completeAllFoodRewardRequirements(foodRewards[1]);
});

document.getElementById('add-greenhouse').addEventListener("click", function(){ 
  completeAllFoodRewardRequirements(foodRewards[2]);
});

document.getElementById('add-farm').addEventListener("click", function(){ 
  completeAllFoodRewardRequirements(foodRewards[3]);
});
