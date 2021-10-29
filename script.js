let playerScore = 0;
let computerScore = 0;

function playerSelect(val) {
	console.log(val);
}

function computerPlay() {
	let rng = Math.floor(Math.random() * 3 + 1);
	switch (rng) {
		case 1:
			return "Rock";
		case 2:
			return "Paper";
		case 3:
			return "Scissors";
		default:
			return null;
	}
}

function play() {}
