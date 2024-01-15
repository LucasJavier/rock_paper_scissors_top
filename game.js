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

function game(computerSelection,playerSelection){
    if(computerSelection === playerSelection) return 0;
    if(playerSelection === "rock"){
        if(computerSelection === "scissors") return 1;
        return 2;
    }
    if(playerSelection === "paper"){
        if(computerSelection === "rock") return 1;
        return 2;
    }
    if(computerSelection === "paper") return 1;
    return 2;
}

function getRemainElements(){
    let myObjects = [];
    myObjects.push(document.querySelector("body"));
    myObjects.push(document.querySelector("h1"));
    myObjects.push(document.querySelector("h3"));
    myObjects.push(document.querySelector("label"));
    myObjects.push(document.querySelectorAll("p"));
    myObjects.push(document.querySelectorAll("footer > label"));
    myObjects.push(document.querySelectorAll("button"));
    myObjects.push(document.querySelector(".displayResult > .score > label[name='user']"));
    myObjects.push(document.querySelector(".displayResult > .score > label[name='computer']"));
    myObjects.push(document.querySelector(".decision > p[name='winner']"));  
    return myObjects;
}

function displayWinWindow(winner){
    objectsToChange[0].style.backgroundColor = "rgb(98,197,138)";
    objectsToChange[1].style.color = "#6a4a22";
    objectsToChange[2].style.color = "#160081";
    objectsToChange[3].style.color = "#160081";
    objectsToChange[4].forEach(p => p.style.color = "#352108");
    objectsToChange[5].forEach(label => label.style.color = "#720000");
    objectsToChange[6].forEach(button => {
        button.style.color = "010101";
        button.disabled = true;});
    objectsToChange[6][3].disabled = false;
    objectsToChange[7].style.color = "white";
    objectsToChange[8].style.color = "white";
    objectsToChange[9].style.color = "rgba(0,58,137)";
    if(winner === 2) objectsToChange[9].textContent = "Computer Wins!!!";
    else objectsToChange[9].textContent = "You Wins!!!";
}

function restartGame(){
    objectsToChange[0].style.backgroundColor = "rgba(0,0,0,1)";
    objectsToChange[1].style.color = "#5bc0eb;"
    objectsToChange[2].style.color = "#FFFD98;"
    objectsToChange[3].style.color = "#FFFD98;"
    objectsToChange[4].forEach(p => p.style.color = "white");
    objectsToChange[5].forEach(label => label.style.color = "white");
    objectsToChange[6].forEach(button => {
        button.style.color = "white";
        button.disabled = false;
    })
    objectsToChange[7].style.color = "#FFFD98";
    objectsToChange[7].textContent = "0";
    objectsToChange[8].style.color = "#FFFD98";
    objectsToChange[8].textContent = "0";
    objectsToChange[9].style.color = "rgba(1, 255, 82)";
    objectsToChange[9].textContent = "";
}

const myOldObjects = [];
let objectsToChange = getRemainElements();
const winAudio = new Audio("./Audio/Yay_Five_Nights_at_Freddys_short.wav");
const loserAudio = new Audio("./Audio/Cartoon_Fail_Trumpet_Sound_effect.wav");
const tieAudio = new Audio("./Audio/Fart_Sound_effect_short.wav");

objectsToChange[6].forEach(button => button.addEventListener("click",function(e){
    if(e.target.id === "restart") restartGame();
    else{
        let whoWon = game(getComputerChoice(),e.target.id);
        if(whoWon === 1) {
            let pointUser = parseInt(objectsToChange[7].textContent) + 1;
            objectsToChange[7].textContent = pointUser.toString();
            objectsToChange[9].textContent = "Point to the user!";
            if(!loserAudio.paused) loserAudio.pause();
            if(!tieAudio.paused) tieAudio.pause();
            winAudio.currentTime = 0;
            winAudio.play();
            if(pointUser === 5) displayWinWindow(1) 
        }
        if(whoWon === 2) {
            let pointComputer = parseInt(objectsToChange[8].textContent) + 1;
            objectsToChange[8].textContent = pointComputer.toString();
            objectsToChange[9].textContent = "Point to the computer!";
            if(!winAudio.paused) winAudio.pause();
            if(!tieAudio.paused) tieAudio.pause();
            loserAudio.currentTime = 0;
            loserAudio.play();
            if(pointComputer === 5) displayWinWindow(2);
        }
        if(whoWon === 0) {
            if(!loserAudio.paused) loserAudio.pause();
            if(!winAudio.paused) winAudio.pause();
            objectsToChange[9].textContent = "It's a TIE!!!";
            tieAudio.currentTime = 0;
            tieAudio.play();
        }   
    }
}));