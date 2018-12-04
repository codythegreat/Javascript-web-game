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