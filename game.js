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

class Colony {
  constructor() {
    this.name = '';
    this.scrap = 0;
    this.food = 100;
    this.scrapMultiplier = 1
    this.rewards = [];
    this.survivors = 1;
    this.foodPurchases = 0;
    // this.maximumScrap = 1000
  }
  updateScrap(scrp) {
    this.scrap += scrp;
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
    if (this.scrap >= reward[1]) {
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
    this.foodCost = 100 * 1;
    this.wanderingSurvivors = 20;
    this.climate = climates[0];
    this.progressBoard = document.getElementById('game-progress-text');
    this.scrapCounter = document.getElementById('colony-scrap-text');
    this.foodCounter = document.getElementById('colony-food-text');
    this.foodButtonText = document.getElementById('food-cost')
    this.colonyName = document.getElementById('colony-name-text');
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
  buildProgressBoardElement(reward) {
    this.progressBoard.textContent += ` ${reward[0]} |`;
  }
}

let game = new GameState;
let colony = new Colony;

const completeAllRewardRequirements = (reward) => {
	if (colony.addReward(reward) == true) {
    game.buildProgressBoardElement(reward);
    game.updateScrapCounter();
	}
}

const completeAllBuyFoodRequirements = () => {
	if (colony.buyFood() == true) {
    game.updateFoodCounter();
    game.updateFoodButton();
    game.updateScrapCounter();
	}
}

document.getElementById('buy-food').addEventListener("click", function(){ 
  completeAllBuyFoodRequirements();
});

document.getElementById("add-colony-name").addEventListener("click", function(){
  colonyName = document.getElementById('colony-name-input').value;
  if (colonyName != '') {
    colony.name = colonyName;
    game.colonyName.textContent = colonyName;
    game.updateFoodCounter();
    game.updateScrapCounter();
  } else {
    alert('Please type a name for your colony.');
  }
});

document.getElementById("add-points").addEventListener("click", function(){ 
  if (colony.name != '') {
  colony.updateScrap(1 * colony.survivors * colony.scrapMultiplier);
  game.updateScrapCounter();
  } else {alert('Please name your colony.');}
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
