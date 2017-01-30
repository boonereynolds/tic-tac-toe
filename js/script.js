console.log('hey')

// var playerTwo = 'o'

// var playerOnePic = 'http://worldartsme.com/images/free-x-clipart-1.jpg'
//
// var playerTwoPic = 'http://www.drodd.com/images14/o29.jpg'

var playerOne = true;

var cardZero = document.getElementById('cardZero');
var cardOne = document.getElementById('cardOne');
var cardTwo = document.getElementById('cardTwo');
var cardThree = document.getElementById('cardThree');
var cardFour = document.getElementById('cardFour');
var cardFive = document.getElementById('cardFive');
var cardSix = document.getElementById('cardSix');
var cardSeven = document.getElementById('cardSeven');
var cardEight = document.getElementById('cardEight');

// var board = [cardZero, cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight]

var board = document.getElementsByClassName('blankBox');

for (var i = 0; i <= board.length; i++) {
  board[i].addEventListener('click', function() {
  if (playerOne) {
    this.style.backgroundImage = "url('http://worldartsme.com/images/free-x-clipart-1.jpg')"
    playerOne = false;
    this.setAttribute('X', '1')
    this.removeEventListener('click', arguments.callee)
  } else {
    this.style.backgroundImage = "url('http://alphabetsforkids.net/wp-content/uploads/2012/01/alphabet-letters-printable-O.gif')"
    playerOne = true;
    this.setAttribute('O', '2')
    this.removeEventListener('click', arguments.callee)
  }
})
}

// Player 1 Wins
//
// var winner = function () {
//   if ((board[0].getAttribute('X') === '1') && (board[1].getAttribute('X') === '1') && (board[2].getAttribute('X') === '1')) {
//     alert('Player 1 wins!');
//   }
//
// }












// for (var i = 0; i <= board.length; i++) {
//   board[i].removeEventListener('click', function())
// }

// document.getElementsByClassName('rowZero')[0].addEventListener('click', function() {console.log('click!')})
// document.getElementsByClassName('rowOne')[0].addEventListener('click', function() {console.log('click!')})
// document.getElementsByClassName('rowTwo')[0].addEventListener('click', function() {console.log('click!')})
