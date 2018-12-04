class Colony {
  constructor() {
    this.scrap = 0;
    this.food = 100;
    this.scrapMultiplier = 1
        
    this.rewards = [];

    this.allowedPopulation = 1;
    this.survivors = 0;
  }
  updateMoney(scrp) {
    this.scrap += scrp;
    scrapCounter.textContent = `${this.scrap} Scrap`;
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
    updateStatsNewestReward(reward);
  }
  get allowedPopulation() {
    return Math.floor(this.scrap / 10000) + Math.floor(this.food / 1000); 
  }
}

const nameYourColony = () => {
  let nameOfColony = '';
  nameElement.textContent = nameOfColony;
}
let nameElement = document.getElementById('name-of-colony')
let points = 1;
let pointMultiplier = 1;
let cats = 1;
let progressBoard = document.getElementById('game-progress-text');
let progressBoardRewardCounter = 0;
let pointCounter = document.getElementById('point-counter');
let rewards = [
  ['Tools', 25, 1.1, 0],
  ['Shack', 50, 1, 1],
  ['House', 100, 1, 3],
  ['Factory', 200, 2, 0],
  ['Laboratory', 350, 3.5, 3]
];

const updatePoints = (pts) => {
  points += pts;
  pointCounter.textContent = `${points.toFixed(1)} Points`
};

const buildProgressBoardRow = () => {
  let newRowElement = document.createElement('DIV');
  newRowElement.className = "row";
  newRowElement.id = `${progressBoardRewardCounter}th row`
  progressBoard.appendChild(newRowElement);
  progressBoard = newRowElement;
}

const buildProgressBoardElement = (type) => {
  progressBoard.textContent += ' ' + type + ' |';
}

const addReward = (reward) => {
  if (points >= reward[1]) {
    pointMultiplier *= reward[2];
    cats += reward[3];
    updatePoints(-reward[1]);
    buildProgressBoardElement(reward[0]);
  } 
}

document.getElementById("add-points").addEventListener("click", function(){ updatePoints(1 * cats * pointMultiplier); });
document.getElementById('add-tools').addEventListener("click", function(){ addReward(rewards[0]); });
document.getElementById('add-shack').addEventListener("click", function(){ addReward(rewards[1]); });
document.getElementById('add-house').addEventListener("click", function(){ addReward(rewards[2]); });
document.getElementById('add-factory').addEventListener("click", function(){ addReward(rewards[3]); });
document.getElementById('add-lab').addEventListener("click", function(){ addReward(rewards[4]); });
