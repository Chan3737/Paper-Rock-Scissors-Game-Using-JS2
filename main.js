
 let playGame = confirm("Shall we play Rock, Paper, or Scissors?");
if(playGame)
    {
        let playerChoice = prompt("Please enter Rock, Paper, or Scissors");
        if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(playerOne === "rock"||playerOne === "paper"||playerOne === "scissors")
        {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
            let result = playerOne === computer ? "Tie game !" : playerOne === "rock" && computer === "paper" ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer wins!`: playerOne ==- "paper" && computer === "scissors" ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer wins!`: playerOne === "scissors" && computer === "rock" ?`playerOne : ${playerOne}\n Computer : ${computer}\n Computer wins!`: `playerOne : ${playerOne}\n Computer : ${computer}\n playerOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again!");
            playAgain ? location.reload():alert("Ok, thanks for playing");
       }
    else{
        let playAgainandAgain = confirm("You didn't enter rock, paper, or scissors");
        playAgainandAgain ? location.reload():alert("Ok, thanks for playing");
        }
    }
    else{
        alert("I guess you changed your mind, may be next time.");
    }
}
else{
    alert("Ok, may be next time.");
}
