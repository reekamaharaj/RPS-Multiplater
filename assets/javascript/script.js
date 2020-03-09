//game variables
let rock;
let paper;
let scissors;
let lizard;
let spock;

//start
let start;

let player1Win;
let player1Lose;
let player2Win;
let player2Lose;
let tie;
let player1;
let player2;


function startGame (){
    $(".rules").hide();
}
if ((player1 === rock) || (player1 === paper || player1 === scissors || player1 === lizard || player1 === spock)){
    if ((player1 === rock && player2 === scissors) || (player1 === rock && player2 === lizard) (player1 === paper && player2 === spock) || (player1 === scissors && player2 === paper) || (player1 === scissors && player2 === lizard) || (player1 === lizard && player2 === paper) || (player1 ===lizard && player2 === spock) || (player1 === spock && player2 === rock) || (player1 === paper && player2 === rock) || (player1 === spock && player2 === scissors) ){
        player1Win++;
        playerLose++;
    }
    else if (player1 === player2) {
        tie++;
    }
    else {
        player1Lose++;
        player2Win++;
    }
}

$(".results").append("Player1 chose: " + player1 + " Player2 chose: " + player2 + "Player1 has won: " + player1Win + "Player1 has lost: " + player1Lose + " Player2 has won: " + player2Win + " Player2 has lost: " + player2Lose);



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