function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function rps(player_input) {

  let valid = ["rock", "paper", "scissors"];
  let opponent = valid[getRandomInt(3)];
  
  if (player_input == undefined) {
        let result = '{"player":' + '"' + opponent + '"' + '}';
        return result;
  }
  
  else {
        let result = '{"player":' + '"' + player_input + '",' + '"opponent":' + '"' + opponent + '",' + '"result":' + '"' + win_loss(player_input, opponent) + '"}';
        return result;
      
  }
}

export function rpsls(player_input) {

  let valid = ["rock", "paper", "scissors", "lizard", "spock"];
  let opponent = valid[getRandomInt(5)];
  
  if (player_input == undefined) {
        let result = '{"player":' + '"' + opponent + '"' + '}';
        return result;
  }
  else if (valid.includes(player_input)) {
        let result = '{"player":' + '"' + player_input + '",' + '"opponent":' + '"' + opponent + '",' + '"result":' + '"' + win_loss(player_input, opponent) + '"}';
        return result;
      
  }
}

function win_loss(player_input, opponent_input) {
  if (player_input == "rock") {
      if (opponent_input == "paper" || opponent_input == "spock") {
          return "lose!!!!!! lol";
      }
      else if (opponent_input == "lizard" || opponent_input == "scissors") {
          return "win!!!!!!! yayyayyayay";
      }
  }
  
  if (player_input == "paper") {
      if (opponent_input == "scissors" || opponent_input == "lizard") {
          return "loserr";
      }
      else if (opponent_input == "rock" || opponent_input == "spock") {
          return "winnerrrrr";
      }
  }
  
  if (player_input == "scissors") {
      if (opponent_input == "rock" || opponent_input == "spock") {
          return "lose hahahah";
      }
      else if (opponent_input == "paper" || opponent_input == "lizard") {
          return "win ok ok ok ";
      }
  }
  
  if (player_input == "lizard") {
      if (opponent_input == "rock" || opponent_input == "scissors") {
          return "lose lol!!!";
      }
      else if (opponent_input == "spock" || opponent_input == "paper") {
          return "win congrats buddy";
      }
  }
  
  if (player_input == "spock") {
      if (opponent_input == "paper" || opponent_input == "lizard") {
          return "lose !!! try harder ";
      }
      else if (opponent_input == "rock" || opponent_input == "scissors") {
          return "winner winner chicken dinner";
      }
  }
  
  return "tieeeeeee";

}
