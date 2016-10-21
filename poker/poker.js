// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

$(function() {
  // Your code goes here!
  $(".deal").on("click", function(event) {
    event.preventDefault()
    var c1 = getRandomInt(0,51)
    var c2 = getRandomInt(0,51)
    var c3 = getRandomInt(0,51)
    var c4 = getRandomInt(0,51)
    var c5 = getRandomInt(0,51)
    $("#c1").attr("src", "http://golearntocode.com/images/cards/" + window.getDeck()[c1] + ".png")
    $("#c2").attr("src", "http://golearntocode.com/images/cards/" + window.getDeck()[c2] + ".png")
    $("#c3").attr("src", "http://golearntocode.com/images/cards/" + window.getDeck()[c3] + ".png")
    $("#c4").attr("src", "http://golearntocode.com/images/cards/" + window.getDeck()[c4] + ".png")
    $("#c5").attr("src", "http://golearntocode.com/images/cards/" + window.getDeck()[c5] + ".png")
  })
})
