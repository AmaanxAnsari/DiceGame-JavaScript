
var Player1 = prompt("Enter Player 1 Name:");
var Player2 = prompt("Enter Player 2 Name:");

function getdice(){
document.querySelectorAll("h2")[0].innerHTML = Player1;
document.querySelectorAll("h2")[1].innerHTML = Player2;
var number1 = Math.floor(Math.random()*6+1);
var r1 = "dice" + number1 + ".png";
document.querySelectorAll(".img")[0].setAttribute("src",r1);

var number2 = Math.floor(Math.random()*6+1);
var r2 = "dice" + number2 + ".png";
document.querySelectorAll(".img")[1].setAttribute("src",r2);

if (r1>r2)
{
    document.querySelectorAll("h1")[1].innerHTML= Player1+" " +"Wins !!!";
}
else if (r1<r2)
{
    document.querySelectorAll("h1")[1].innerHTML=Player2 +" "+"Wins !!!";
}
else
{
    document.querySelectorAll("h1")[1].innerHTML="Match Draw !!!";
}

}












