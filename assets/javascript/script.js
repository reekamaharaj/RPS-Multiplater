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
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let lizard = "lizard";
let spock = "spock";

//player variables
let sheldon = "sheldon";
let leonard = "leonard";
let penny = "penny";
let amy = "amy";

//in game

let player1 = {
    win: 0 ,
    lose: 0 ,
    choice: "",
    picked: "",
    ready: false
}

let player2 = {
    win: 0 ,
    lose: 0 ,
    choice: "",
    picked: "",
    ready: false
}

let tie;

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
    sendToDatabase();

    $(".player").hide();
    $(".gamePlay").show();

    //register the players choice
    $(".rock").click(rockClick);
    $(".paper").click(paperClick);
    $(".scissors").click(scissorsClick);
    $(".lizard").click(lizardClick);
    $(".spock").click(scissorsClick);
    $(".final").click(finalClick);
    //on click of start, begin game when both players have selected start
}
function finalClick(){
    player1.ready = true;
    player2.ready = true;
    sendToDatabase();
}
function rockClick(){
    player1.picked = rock;
    console.log(player1.picked);
}

function paperClick(){
    player1.picked = paper;
    console.log(player1.picked);
}

function scissorsClick(){
    player1.picked = scissors;
    console.log(player1.picked);
}

function lizardClick(){
    player1.picked = lizard;
    console.log(player1.picked);
}

function spockClick(){
    player1.picked = spock;
    console.log(player1.picked);
}

function sheldonClick(){
    player1.choice = sheldon;
    console.log(player1.choice);
}

function leonardClick(){
    player1.choice = leonard;
    console.log(player1.choice);
}

function pennyClick(){
    player1.choice = penny;
    console.log(player1.choice);
}

function amyClick(){
    player1.choice = amy;
    console.log(player1.choice);
}

//checks who wins the game
function results(){
    $(".results").append("Player1 chose to play as: " + player1.choice + ". Player1 has won: " + player1.win + "games. Player1 has lost: " + player1.lose + " games. Player2 chose to play as: " + player2.choice + ". Player2 has won: " + player2.win + " games. Player2 has lost: " + player2.lose + ". Player1 and Player2 have tied " + tie + " times.");
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
    if (player1.ready === true && player2.ready === true){
        if ((player1.picked === rock && player2.picked === scissors) || (player1.picked === rock && player2.picked === lizard) || (player1.picked === paper && player2.picked === spock) || (player1.picked === scissors && player2.picked === paper) || (player1.picked === scissors && player2.picked === lizard) || (player1.picked === lizard && player2.picked === paper) || (player1.picked ===lizard && player2.picked === spock) || (player1.picked === spock && player2.picked === rock) || (player1.picked === paper && player2.picked === rock) || (player1.picked === spock && player2.picked === scissors) ){
            player1.win++;
            player2.lose++;
            nextGame();
        }
        else if (player1.picked === player2.picked) {
            tie++;
            nextGame();
        }
        else {
            player1.lose++;
            player2.win++;
            nextGame();
        }
    }
}

function sendToDatabase() {
    database.ref().push({
        player1: player1,
        player2: player2
    });
}
function nextGame (){
    //button to ask if the player wants to play again
    player1.ready = false;
    player2.ready = false;
    sendToDatabase();
}

function reset() {
    //function to reset the scores and chat window
    player1 = {
        win: 0 ,
        lose: 0 ,
        choice: "",
        picked: "",
        ready: false
    }
    
    player2 = {
        win: 0 ,
        lose: 0 ,
        choice: "",
        picked: "",
        ready: false
    }
}

/* 
- rock crushes scissors
- rock crushes lizard
- paper covers rock
- paper disproves spock
- scissors cut paper
- scissors decapitates lizard
- lizard eats paper
- lizard poisons spock
- spock vaporizes rock
- spock smashes scissors
*/