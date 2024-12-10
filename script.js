const win_or_lose = document.getElementById("win_lose_info");
const choices = ["rock", "paper", "scissor"]
let player = document.getElementById("playerinfo");
let computer = document.getElementById("computerinfo");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random()*3)];
  player.textContent = `player: ${playerChoice}`;
  computer.textContent = `computer: ${computerChoice}`;
  let result = "";
  if(playerChoice === computerChoice){
    result = "It's a Tie";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissor") ? "You Lose": "You Win";
      
      case "scissor":
        result = (computerChoice === "paper") ? "You Lose": "You Win";
       
      case "paper":
        result = (computerChoice === "rock") ? "You Lose": "You Win";
    }
  }
  
  if(result === "You Lose"){
    win_or_lose.style.color = "#ff0000";
    computerScore++;
  }
  else if(result === "It's a Tie"){
    win_or_lose.style.color = "#ffff00";
  }
  else{
    win_or_lose.style.color = "#00ff00";
    playerScore++;
  }
  
  win_or_lose.textContent = result;
  document.getElementById("playerscore").textContent = `player score: ${playerScore}`;
  document.getElementById("computerscore").textContent = `computer score: ${computerScore}`;
  
}