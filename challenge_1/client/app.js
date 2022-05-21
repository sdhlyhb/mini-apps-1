/* indexes on the board.
[ 0, 1, 2,
  3, 4, 5,
  6, 7, 8 ]


*/


//alert('Welcome to Tic Tac Toe!!');
let move_X = 'X';
let move_O = 'O';
let currentPlayer = move_X;
let currentWinner = move_X;
let totalMoves = 0;
const winningIndexCombo = ['012', '048', '036','147','258','246','345','678'];
let map1 = new Map(); //indexes for move_X player;
let map2 = new Map(); //indexes for move_O player;
let player1Stats = {win: 0, lose:0, draw:0};
let player2Stats = {win: 0, lose:0, draw:0};


var makeMove = function(event) {
  console.log('a move is made!!!');
  if(event.target.innerText === '') {
    event.target.innerText = currentPlayer;
  }

  totalMoves++;
  if(currentPlayer === move_X) {
    event.target.style.color = 'red';
    map1.set(event.target.id, true);
    disableMoveInCurBox(event.target.id);
    console.log('map1:', map1);
    checkWinner();
    currentPlayer = move_O;
  } else {
    event.target.style.color = 'blue';
    map2.set(event.target.id, true);
    disableMoveInCurBox(event.target.id);
    console.log('map2:', map2);
    checkWinner();
    currentPlayer = move_X;
  }

}

var boxes = document.querySelectorAll('.box');
var startingBoard = function() {

  boxes.forEach(box => {
    box.addEventListener('click', makeMove);
  });

};

var disableMoveInCurBox = function(id) {

    boxes[id].removeEventListener('click', makeMove);

};

var disableMoves = function() {

  boxes.forEach(box => {
    box.removeEventListener('click', makeMove);
  });

};



var updateStats = function() {
  var player1Win = document.getElementById('player1-win');
  var player1Lose = document.getElementById('player1-lose');
  var player1Draw = document.getElementById('player1-draw');
  var player2Win = document.getElementById('player2-win');
  var player2Lose = document.getElementById('player2-lose');
  var player2Draw = document.getElementById('player2-draw');


  player1Win.innerText = player1Stats.win + '';
  player1Lose.innerText = player1Stats.lose + '';
  player1Draw.innerText = player1Stats.draw + '';
  player2Win.innerText = player2Stats.win + '';
  player2Lose.innerText = player2Stats.lose + '';
  player2Draw.innerText = player2Stats.draw + '';

};


var checkWinner = function() {
  let player1Wins = false;
  let player2Wins = false;


  if (totalMoves < 5 ) {
    console.log('No Winner Yet!!');
    winningMsgText.innerText = 'No Winner Yet!!';
  }

  if(totalMoves >= 5 && totalMoves <=9 ) { //before 5 moves no one will win, after 9 moves the board is full;

      for(var i = 0; i < winningIndexCombo.length; i++) {
        if(isSubset(map1, winningIndexCombo[i])) {
          console.log('Player 1 wins!!!');
          player1Wins = true;
          player1Stats.win++;
          player2Stats.lose++;
          var player1Name = document.getElementById('player1-symbol').innerText.split(':')[0];
          winningMsgText.innerText = `🎉🤩${player1Name} Wins!! X will make first move on the next round!`;
          updateStats();
          currentWinner = move_X;


          disableMoves();

        }
      }
      if(!player1Wins) {
        for(var i = 0; i < winningIndexCombo.length; i++) {
          if(isSubset(map2, winningIndexCombo[i])) {
            console.log('Player 2 wins!!!');
            player2Wins = true;
            player2Stats.win++;
            player1Stats.lose++;
            var player2Name = document.getElementById('player2-symbol').innerText.split(':')[0];
            winningMsgText.innerText = `🎊😆${player2Name} Wins!! O will make first move on the next round!`;
            currentWinner = move_O;
            updateStats();

            disableMoves();
          }
        }
      }

    }
    if (totalMoves === 9 && (!player1Wins && !player2Wins)) {
      console.log('It is a Draw!!!!');
      player1Stats.draw++;
      player2Stats.draw++;
      winningMsgText.innerText = '😜Board is full !!! It is a Draw!!!!';
      updateStats();

      disableMoves();

    }

}

var clearStats = function() {
    player1Stats = {win: 0, lose:0, draw:0};
    player2Stats = {win: 0, lose:0, draw:0};
    updateStats();
};


//restart game will empty the board and make the first move back to X.
var restartGame = function(){
  setTimeout(() =>{
    boxes.forEach(box => {
      box.innerText = '';
      box.addEventListener('click', makeMove);
    });
    winningMsgText.innerText = "🤔The Winner Is...???";
    currentPlayer = currentWinner;
    totalMoves = 0;
    map1 = new Map();
    map2 = new Map();

  }, 500);
};

var changeName = function(e) {
  var curName = e.target.innerText.split(':')[0];
  var curSymbol = e.target.innerText.split(':')[1];
  let name = prompt('input your name:', curName);
  var text = name + ': ' + curSymbol;
  e.target.innerText = text;

}

var player1Symbol = document.getElementById('player1-symbol');
var player2Symbol = document.getElementById('player2-symbol');
player1Symbol.addEventListener('click', changeName);
player2Symbol.addEventListener('click', changeName);


resetBtn.addEventListener('click', restartGame);
clear.addEventListener('click', clearStats);
restartGame();
startingBoard();


//helperFunction:
var isSubset = function(map, sub) {
  for(var i = 0; i < sub.length; i++) {
    if(!map.has(sub[i])){
      return false;
    }
  }
  return true;


}