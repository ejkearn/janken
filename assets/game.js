

function play(playerMove){
    var compNumber = 0;
    var compMove = "";
    compNumber = Math.floor(Math.random() * 3);
    var x ="";

    

    if (compNumber == 0){
        compMove = "Rock";
        if (playerMove == "Rock"){
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  It's a tie!";
        }else if("Paper"){
            
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  You win!";
        }else if ("Scisors"){
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  You Lose!";
        }
    } else if (compNumber == 1){
        compMove = "Paper";
        if (playerMove == "Paper"){
        document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  It's a tie!";
        }else if(playerMove == "Scisors"){
            
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  You win!";
        }else if (playerMove == "Rock"){
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  You Lose!";
        }
    } else if (compNumber == 2){
        compMove = "Scissors"
        if (playerMove == "Scissors"){
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  It's a tie!";
        }else if(playerMove == "Rock"){
            
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  You win!";
        }else if (playerMove == "Paper"){
            document.getElementById("p1").innerHTML = "You threw "+ playerMove + " and I threw " + compMove + "!  You Lose!";
        }
    } 
    document.getElementById("winPlace").innerHTML = wins;
}

// if (compMove < 4){
// x = "You Won with " + playerMove;
// console.log(compMove);
//     alert(x);
// }else if ( compMove < 7){
//     x = "We Tied with " + playerMove;
//     console.log(compMove);
//     alert(x) ;
// }else {
//     x = "You Lost with " + playerMove;
//     console.log(compMove);
//     alert (x);
// }


// var element = document.getElementById("poop").onclick = play();