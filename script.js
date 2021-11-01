let playerScore = 0;
let computerScore = 0;

function playComp() {
	/*
	This is by far the worst RNG I have ever used in my life.
	This is stupid--but it prevents having 5 tie games in a row
	so, I take it for what it is.
	*/
	const rng = Math.floor(Math.random() * 101);
	if (rng > 90) return "rock";
	else if (rng > 80) return "paper";
	else if (rng > 70) return "scissors";
	else if (rng > 60) return "rock";
	else if (rng > 50) return "paper";
	else if (rng > 40) return "scissors";
	else if (rng > 30) return "rock";
	else if (rng > 20) return "paper";
	else if (rng > 10) return "scissors";
	else return "rock";
}

function playHands(val) {
	const playerSelection = val.toUpperCase();
	const computerSelection = playComp().toUpperCase();
	console.log(`Player played ${playerSelection}`);
	console.log(`Computer played ${computerSelection}`);
	match(playerSelection, computerSelection);
}

function match(playerHand, compHand) {
	switch (playerHand) {
		case "ROCK": {
			switch (compHand) {
				case "ROCK": {
					setMatchState("Devil played Rock! Tie Game!");
					break;
				}
				case "PAPER": {
					setMatchState(
						"Devil played Paper! Paper covers Rock... Devil wins..."
					);
					computerWin();
					break;
				}
				case "SCISSORS": {
					setMatchState(
						"Devil played Scissors! Rock breaks Scissors! Well Done!"
					);
					playerWin();
					break;
				}
				default: {
					setMatchState(
						"Devil played an illegal hand! The crooked cheat... Try again!"
					);
					break;
				}
			}
			break;
		}
		case "PAPER": {
			switch (compHand) {
				case "ROCK": {
					setMatchState("Devil played Rock! Paper covers Rock! Well Done!");
					playerWin();
					break;
				}
				case "PAPER": {
					setMatchState("Devil played Paper! Tie Game!");
					break;
				}
				case "SCISSORS": {
					setMatchState(
						"Devil played Scissors! Scissors cut Paper... Devil wins..."
					);
					computerWin();
					break;
				}
				default: {
					setMatchState(
						"Devil cheated with an illegal hand! What a scumbag! Try again!"
					);
					break;
				}
			}
			break;
		}
		case "SCISSORS": {
			switch (compHand) {
				case "ROCK": {
					setMatchState(
						"Devil played Rock! Rock breaks Scissors... Devil wins..."
					);
					computerWin();
					break;
				}
				case "PAPER": {
					setMatchState("Devil played Paper! Scissors cut Paper! Well Done!");
					playerWin();
					break;
				}
				case "SCISSORS": {
					setMatchState("Devil played Scissors! Tie Game!");
					break;
				}
				default: {
					setMatchState(
						"You won't believe it! The Devil tried to cheat!... I guess it is believable, actually... Try Again!"
					);
					break;
				}
			}
			break;
		}
		default: {
			setMatchState("Hey! No cheating! You can only play with the buttons!");
			break;
		}
	}
}

function setMatchState(state) {
	document.getElementById("matchState").innerText = state;
}

function setAvatars(win) {
	if (win) {
		document.getElementById("devilFace").setAttribute("src", "devilfrown.png");
		document.getElementById("angelFace").setAttribute("src", "angelsmile.png");
	} else {
		document.getElementById("devilFace").setAttribute("src", "devilsmile.png");
		document.getElementById("angelFace").setAttribute("src", "angelfrown.png");
	}
}

function playerWin() {
	setAvatars(true);
	document.getElementById("angelScore").innerText = ++playerScore;
	if (playerScore == 5) {
		setMatchState(
			"Congratulations!!! You've defeated evil and saved the Cosmos!"
		);

		document.querySelectorAll("button").forEach((bttn) => {
			bttn.style.display = "none";
		});
		document.getElementById("devilFace").style.display = "none";
		document.getElementById("devilScore").style.display = "none";
	}
}

function computerWin() {
	setAvatars(false);
	document.getElementById("devilScore").innerText = ++computerScore;
	if (computerScore == 5) {
		setMatchState(
			"Well, it's an unfortunate day for all of the Cosmos... You have utterly failed to defeat the devil. For shame."
		);

		document.querySelectorAll("button").forEach((bttn) => {
			bttn.style.display = "none";
		});
		document.getElementById("angelFace").style.display = "none";
		document.getElementById("angelScore").style.display = "none";
	}
}
