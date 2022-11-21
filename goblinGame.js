/*Darius Saadat Period 7-8 Even Level 1 Goblin Game project*/
var pile1 = 3;
var pile2 = 3;
var pile3 = 3;
var isPlayerTurn = false;
var gameOver = false;
function start(){
    pile1 = 3;
    pile2 = 3;
    pile3 = 3;
    isPlayerTurn = false;
    gameOver = false;
    display();
    document.getElementById("warning").innerHTML = "";
    document.getElementById("action").innerHTML = "";
}
function takeStone(pileNum,count){
    
    if(pileNum == 1){
        if(count > pile1){
            return false;
        }
        else{
            pile1 -= count;
            return true;
        }
    }
    else if(pileNum == 2){
        if(count > pile2){
            return false;
        }
        else{
            pile2 -= count;
            return true;
        }
    }
    else{
        if(count > pile3){
            return false;
        }
        else{
            pile3 -= count;
            return true;
        }
    }
}
function goblinTurn(){
    if(gameOver){
        document.getElementById("warning").innerHTML = "The game is over";
    }
    else if(!isPlayerTurn){
        if(pile1>=pile2 && pile1>=pile3){
            takeStone(1,1);
            document.getElementById("action").innerHTML = "unK - We just removed 1 stone from stack 1. A brilliant strategy!";
        }
        else if(pile2>= pile3){
            takeStone(2,1);
            document.getElementById("action").innerHTML = "unK - We just removed 1 stone from stack 2.  A sneaky move.";
        }
        else{
            takeStone(3,1);
            document.getElementById("action").innerHTML = "unK - We just removed 1 stone from stack 3.  Our victory is guaranteed.";
        }
        isPlayerTurn = true;
        display();
        check();
        if(gameOver){
            document.getElementById("action").innerHTML = "unK - The game is over.  You won, we lost.  How is that possible?";
        }
    }
    else{
        document.getElementById("warning").innerHTML = "It is your turn.";
    }
}
function display(){
    lines = "";
    for(i = 3; i > 0; i--){
        if(pile1 >= i){
            lines += "O";
        }
        else{
            lines += "X";
        }
        lines += " | ";
        if(pile2 >= i){
            lines += "O";
        }
        else{
            lines += "X";
        }
        lines += " | ";
        if(pile3 >= i){
            lines += "O";
        }
        else{
            lines += "X";
        }
        lines += "<br>";
    }
    document.getElementById("display").innerHTML = lines;
}
function playerTurn(pileNum,count){
    if(gameOver){
        document.getElementById("warning").innerHTML = "The game is over";
    }
    else if(isPlayerTurn){
        if(takeStone(pileNum,count)){
            document.getElementById("warning").innerHTML = "";
            display();
            isPlayerTurn = false;
            check();
            if(gameOver){
                document.getElementById("action").innerHTML = "unK - The game is over.  You lost, we won. Obviously, you never stood a chance.";
            }
            else{
                document.getElementById("action").innerHTML = "You removed " + count + " stone from stack " + pileNum + ".  Why did do you do that?";
            }
        }
        else{
            document.getElementById("warning").innerHTML = "That move is not possible.";
        }
    }
    else{
        document.getElementById("warning").innerHTML = "It is not your turn.";
    }
}
function check(){
    if(pile1 == 0 && pile2 == 0 && pile3 == 0){
        gameOver = true;
    }
}
