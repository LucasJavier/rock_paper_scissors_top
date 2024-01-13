function getComputerChoice(){

    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice){
        case 1:{
            return "rock";
            break;
        }
        case 2:{
            return "paper";
            break;
        }
        case 3:{
            return "scissors";
            break;
        }
    }

}

function playRound(playerSelection, computerSelection){

   roundCounter = 0;
   if(playerSelection === null) {
        console.log("You didn't pick!!! Hence you lose :(");
        return 0;
   }
   let general_playerSelection = playerSelection.toLowerCase();
   while(general_playerSelection === computerSelection) {
        console.log("It's a tie!!!");
        ++roundCounter;
        console.log("Round number " + roundCounter);
        playerSelection = prompt("Choose: Rock, Paper, or Scissors");
        if(playerSelection === null) {
            console.log("You didn't pick!!! Hence you lose :(");
            return 0;
        }
        general_playerSelection = playerSelection.toLowerCase();
   }
   if(general_playerSelection === "rock"){
        if(computerSelection === "Scissors") {
            console.log("You Win!!! Rock beats Scissors");
            return 1;
        }
        else {
            console.log("You lost :(, Paper beats Rock");
            return 0;
        }
   }
   else if(general_playerSelection === "paper"){
        if(computerSelection === "rock") {
            console.log("You Win!!! Paper beats Rock");
            return 1;
        }
        else {
            console.log("You lost :(, Scissors beats Paper");
            return 0;
        }
   }
   else{
        if(computerSelection === "paper") {
            console.log("You Win!!! Scissors beats Paper");
            return 1;
        }
        else {
            console.log("You lost :(, Rock beats Scissors");
            return 0;
        }
   }

}

function Game(){

    let player_Wins = 0;
    let computer_Wins = 0;
    let winner;

    for(i = 0; i < 5; i++){
        let player_selection = prompt("Choose: Rock, Paper, or Scissors");
        let computer_selection = getComputerChoice();
        winner = playRound(player_selection,computer_selection,player_Wins,computer_Wins);
        if(winner === 0) ++computer_Wins;
        else ++player_Wins;
        if(computer_Wins === 3){
            console.log("Computer Wins!!!");
            break;
        }
        else if(player_Wins === 3){
            console.log("Player Wins!!!");
            break;
        }
    }

}