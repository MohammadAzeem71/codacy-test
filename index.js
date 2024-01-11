//left side image
var radomNumber = Math.floor(Math.random() * 6 + 1);
var randomSourceImage = "images/dice" + radomNumber + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", randomSourceImage);

//right side image

var radomNumber1 = Math.floor(Math.random() * 6 +1);
var randomSourceImage = "images/dice" + radomNumber1 + ".png";
document.getElementsByTagName("img")[1].setAttribute("src", randomSourceImage);

//change image 

var heading = document.querySelector("h1");
if(radomNumber > radomNumber1){
    heading.innerHTML ="🚩 Player 1 Wins"
}
else if(radomNumber1 > radomNumber){
    heading.innerHTML ="Player 2 Wins 🚩"
}else{
    heading.innerHTML ="Draw!"
}