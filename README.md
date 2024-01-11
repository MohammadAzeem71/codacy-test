# Dice Game

A simple JavaScript dice game where two players roll dice and the higher number wins.

## How to Play

1. Open the `index.html` file in your web browser.
2. The left side of the page displays the image of the dice rolled by Player 1, and the right side displays the image of the dice rolled by Player 2.
3. The game will automatically determine the winner or declare a draw based on the dice rolls.
4. The result will be displayed at the top of the page, indicating which player won or if it was a draw.

## Screenshots :

<table>
  <tr>
    <td><img alt="Dice game Screenshot 1" src="https://raw.githubusercontent.com/Gnanaprakash-Dev/Dice-Game/main/images/screenshort1.png"></td>
    <td><img alt="Dice game Screenshot 2" src="https://raw.githubusercontent.com/Gnanaprakash-Dev/Dice-Game/main/images/screenshort2.png"></td>
  </tr>
</table>

## Game Logic

The game is implemented using JavaScript. Here's a brief overview of the code:

```javascript
// Generate a random number between 1 and 6 for Player 1's dice roll
var randomNumber = Math.floor(Math.random() * 6 + 1);
var randomSourceImage = "images/dice" + randomNumber + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", randomSourceImage);

// Generate a random number between 1 and 6 for Player 2's dice roll
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomSourceImage = "images/dice" + randomNumber1 + ".png";
document.getElementsByTagName("img")[1].setAttribute("src", randomSourceImage);

// Determine the winner or declare a draw based on the dice rolls
var heading = document.querySelector("h1");
if (randomNumber > randomNumber1) {
    heading.innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 > randomNumber) {
    heading.innerHTML = "Player 2 Wins 🚩";
} else {
    heading.innerHTML = "Draw!";
}



