export { rps, rpsls }


//create rps function
function rps(shot) {
	let computer = Math.floor(Math.random()*3);
	computer = computer == 0 ? "rock" :
					computer == 1 ? "paper" :
					"scissors";
	if (shot == undefined) {
		return { player: computer };
	}
	let user = shot.toLowerCase();

	let options = ['rock', 'paper', 'scissor'];

	if (!options.includes(user)) {
			if (user === "lizard" || user === "spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let result = '';

	if (computer === user) {
		result = "tie";
	} else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}
	
        return { player: user,
		opponent: computer,
		result: result
	};
}


//create rpsls function
function rpsls(shot) {
	let computer = Math.floor(Math.random()*5);
	computer = computer == 0 ? "rock" :
		computer == 1 ? "paper" :
		computer == 2 ? "scissors" :
		computer == 3 ? "lizard" :
		"spock";

	if (shot == undefined) {
		return { player: computer };
	}

	let options = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

	let user = shot.toLowerCase();

	if (!options.includes(user)) {
		console.error(`${shot} is not a valid choice.`);
		throw new RangeError();
	}
	let result = '';

	if (computer === user) {
		result = "tie";
	} else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else if (computer === "rock" && user === "lizard" || computer === "lizard" && user === "spock" || computer === "spock" && user === "rock") {
		result = "lose";
	} else if (computer === "spock" && user === "scissors" || computer === "scissors" && user === "lizard" || computer === "paper" && user === "spock" || computer === "lizard" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}

