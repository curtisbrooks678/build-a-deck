$(document).ready(function() {

  const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  const suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
  let cardDeckArr = []
  let suitIndex = 0;

  suits.forEach(function(suit) {
    let rankIndex = 0;
    ranks.forEach(function(rank){
      $("ul#card-list").append("<li>" + ranks[rankIndex] + " of " + suits[suitIndex] + "</li>");
      rankIndex += 1;
    });
    suitIndex +=1;
  });
});
