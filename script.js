function computerPlay() {
    var choices = ["rock", "paper", "scissors"];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}


var playerSelection;

var wins = 0;
var losses = 0;
var draws = 0;

var btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
  playRound("rock", computerPlay());
});

var btn = document.querySelector('#btn2');
btn.addEventListener('click', () => {
  playRound("paper", computerPlay());
});

var btn = document.querySelector('#btn3');
btn.addEventListener('click', () => {
  playRound("scissors", computerPlay());
});

const div = document.createElement('div');
const h1 = document.createElement('h1')
h1.textContent = "Scoreboard:";
div.appendChild(h1);

const p1 = document.createElement('p')
p1.textContent = "Wins: " + wins;
div.appendChild(p1);

const p2 = document.createElement('p')
p2.textContent = "Losses: " + losses;
div.appendChild(p2);

const p3 = document.createElement('p')
p3.textContent = "Draws: " + draws;
div.appendChild(p3);

container.appendChild(div);

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
           draws++;
           alert("It's a draw!");
       } else if (playerSelection == "rock" && computerSelection == "scissors") {
           wins++;
           alert("You win! Rock beats scissors");
       } else if (playerSelection == "paper" && computerSelection == "rock") {
           wins++;
           alert("You win! Paper beats rock");
       } else if (playerSelection == "scissors" && computerSelection == "paper") {
           wins++;
           alert("You win! Scissors beats paper");
       } else if (playerSelection == "rock" && computerSelection == "paper") {
           losses++;
           alert("You lose! Paper beats rock!");
       } else if (playerSelection == "paper" && computerSelection == "scissors") {
           losses++;
           alert("You lose! Scissors beats paper");
       } else if (playerSelection == "scissors" && computerSelection == "rock") {
           losses++;
           alert("You lose! Rock beats scissors");
       } else {
           alert("Oops! Something went wrong.");
       }

       p1.textContent = "Wins: " + wins;
       p2.textContent = "Losses: " + losses;
       p3.textContent = "Draws: " + draws;

    if (wins == 3) {
        document.write("Congratulations! You defeated the computer 3 to " + losses + "!");
    } else if (losses == 3) {
        document.write("The computer is champion, winning by a score of 3 to " + wins + "!");
    } 
   }