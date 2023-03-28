// FOR DICE NO 1
var randomNumber1 =Math.floor(Math.random()*6) +1;
/*randomNumber1 =Math.floor(randomNumber1*6) + 1 ;
//randomNumber1= Math.floor(randomNumber1) + 1;
console.log(randomNumber1);*/

var randomDiceNumber = "dice" + randomNumber1 + ".png" ;
var randomImageSource = "images/" + randomDiceNumber;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//FOR DICE NO 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
/*var randomDiceNumber2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceNumber2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);*/

 // OR
 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


 // CONTROL STATEMENT 
 if (randomNumber1 > randomNumber2){
    document.querySelector("h1").style.fontSize = "5rem"
    document.querySelector("h1").innerHTML = "✌️1st Player wins!"
 }
 else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").style.fontSize = "5rem"
    document.querySelector("h1").innerHTML = "2nd Player wins!✌️"
 }
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
