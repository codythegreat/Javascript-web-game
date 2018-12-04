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
  updateRewards(reward) {
    this.rewards.push(reward);
    this.updateStatsNewestReward(reward);
  }
  addReward(reward) {
    if (this.scrap >= reward[1]) {
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
}

class GameState {
  constructor() {
    this.foodCost = 100 * 1;
    this.wanderingSurvivors = 20;
    this.climate = climates[0];
    this.progressBoard = document.getElementById('game-progress-text');
    this.scrapCounter = document.getElementById('colony-scrap-text');
    this.colonyName = document.getElementById('colony-name-text');
  }
  updateScrapCounter() {
    this.scrapCounter.textContent = `${colony.scrap.toFixed()} Scrap`;
  }
  buildProgressBoardElement() {
    this.progressBoard.textContent.append(` ${reward[0]} |`)
  }
}

let game = new GameState;
let colony = new Colony;

document.getElementById("add-colony-name").addEventListener("click", function(){
  colonyName = document.getElementById('colony-name-input').value;
  if (colonyName != '') {
    colony.name = colonyName;
    game.colonyName.textContent = colonyName;
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
  if (colony.addReward(rewards[0]) == true) {
    game.buildProgressBoardElement(rewards[0]);
  } 
});
document.getElementById('add-shack').addEventListener("click", function(){ 
  if (colony.addReward(rewards[1]) == true)
    game.buildProgressBoardElement(rewards[1]);
});
document.getElementById('add-house').addEventListener("click", function(){ 
  if (colony.addReward(rewards[2]) == true)
    game.buildProgressBoardElement(rewards[2]);
});
document.getElementById('add-factory').addEventListener("click", function(){ 
  if (colony.addReward(rewards[3]) == true)
    game.buildProgressBoardElement(rewards[3]);
});
document.getElementById('add-lab').addEventListener("click", function(){ 
  if (colony.addReward(rewards[4]) == true)
    game.buildProgressBoardElement(rewards[4]);
});
