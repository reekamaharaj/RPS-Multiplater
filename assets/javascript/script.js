var firebaseConfig = {
    apiKey: "AIzaSyDp46xdPw27JdXLrJwOHEpcpZfpkEElnrs",
    authDomain: "rpsls-2fe1b.firebaseapp.com",
    databaseURL: "https://rpsls-2fe1b.firebaseio.com",
    projectId: "rpsls-2fe1b",
    storageBucket: "rpsls-2fe1b.appspot.com",
    messagingSenderId: "1050935846052",
    appId: "1:1050935846052:web:053f994e7de1b4ee7cf231",
    measurementId: "G-0WW6M6HMXQ"
}

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

//game variables
let rock;
let paper;
let scissors;
let lizard;
let spock;

//player variables
let sheldon;
let leonard;
let penny;
let amy;

//start
let start;
let player1Ready = false;
let player2Ready = false;

let player1Win;
let player1Lose;
let player2Win;
let player2Lose;
let tie;
let player1;
let player2;

$(document).ready(function() {
    $("#start").click(startGame);
    $(".gamePlay").hide();
    $(".results").hide();
    $(".sheldon").click(sheldonClick);
    $(".leonard").click(leonardClick);
    $(".penny").click(pennyClick);
    $(".amy").click(amyClick);
})


function startGame (){
    console.log("well this works so far");
    $(".player").hide();
    $(".gamePlay").show();
    //register the players choice
    $(".rock").click(rockClick);
    $(".paper").click(paperClick);
    $(".scissors").click(scissorsClick);
    $(".lizard").click(lizardClick);
    $(".spock").click(scissorsClick);    
    //on click of start, begin game when both players have selected start
}

function rockClick(){
    //store the rock value for which ever user chose it
    console.log("rock");
}

function paperClick(){
    console.log("paper");
}

function scissorsClick(){
    console.log("scissors");
}

function lizardClick(){
    console.log("lizard");
}

function spockClick(){
    console.log("spock");
}

function sheldonClick(){
    console.log("sheldon");
}

function leonardClick(){
    console.log("leonard");
}

function pennyClick(){
    console.log("penny");
}

function amyClick(){
    console.log("amy");
}

//checks who wins the game
function results(){
    $(".results").append("Player1 chose: " + player1 + " Player2 chose: " + player2 + "Player1 has won: " + player1Win + "Player1 has lost: " + player1Lose + " Player2 has won: " + player2Win + " Player2 has lost: " + player2Lose);
}

    //click from player1 will store the players choice
    //click from player2 will store the players choice
    //when both are chosen the the results will be returned
    //Banner to tell the player what they need to do
    //Choose something. After chosen display waiting for other player
    //Or say that player is waiting on users choice
    //After both have given a choice then compare and display the results
    //reset button to get a new game and score
    //add chat functions so players can communicate while playing
function results (){
    if ((player1 === rock) || (player1 === paper || player1 === scissors || player1 === lizard || player1 === spock)){

        if ((player1 === rock && player2 === scissors) || (player1 === rock && player2 === lizard) || (player1 === paper && player2 === spock) || (player1 === scissors && player2 === paper) || (player1 === scissors && player2 === lizard) || (player1 === lizard && player2 === paper) || (player1 ===lizard && player2 === spock) || (player1 === spock && player2 === rock) || (player1 === paper && player2 === rock) || (player1 === spock && player2 === scissors) ){
            player1Win++;
            playerLose++;
            nextGame();
        }
        else if (player1 === player2) {
            tie++;
            nextGame();
        }
        else {
            player1Lose++;
            player2Win++;
            nextGame();
        }
    }    
}

function nextGame (){
    //button to ask if the player wants to play again
}

function reset() {
    //function to reset the scores and chat window
}

/* 
- rock crushes scissors
-rock crushes lizard
-paper covers rock
-paper disproves spock
- scissors cut paper
-scissors decapitates lizard
- lizard eats paper
-lizard poisons spock
-spock vaporizes rock
-spock smashes scissors
*/