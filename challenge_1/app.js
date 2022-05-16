/* indexes on the board.
[ 0, 1, 2,
  3, 4, 5,
  6, 7, 8 ]


*/


//alert('Welcome to Tic Tac Toe!!');
let move_X = 'X';
let move_O = 'O';
let currentPlayer = move_X;
let totalMoves = 0;
const winningIndexCombo = ['012', '048', '036','147','258','246','345','678'];
let map1 = new Map(); //indexes for move_X player;
let map2 = new Map(); //indexes for move_O player;


var makeMove = function(event) {
  console.log('a move is made!!!');
  if(event.target.innerText === '') {
    event.target.innerText = currentPlayer;
  }

  totalMoves++;
  if(currentPlayer === move_X) {
    map1.set(event.target.id, true);
    disableMoveInCurBox(event.target.id);
    console.log('map1:', map1);
    checkWinner();
    currentPlayer = move_O;
  } else {
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
          winningMsgText.innerText = 'Player 1 Wins!!!!!';
          disableMoves();

        }
      }
      if(!player1Wins) {
        for(var i = 0; i < winningIndexCombo.length; i++) {
          if(isSubset(map2, winningIndexCombo[i])) {
            console.log('Player 2 wins!!!');
            player2Wins = true;
            winningMsgText.innerText = 'Player 2 Wins!!!!!';
            disableMoves();
          }
        }
      }

    }
    if (totalMoves === 9 && (!player1Wins && !player2Wins)) {
      console.log('It is a Draw!!!!');
      winningMsgText.innerText = 'Board is full !!! It is a Draw!!!!';
      disableMoves();

    }

}



//restart game will empty the board and make the first move back to X.
var restartGame = function(){
  setTimeout(() =>{
    boxes.forEach(box => {
      box.innerText = '';
      box.addEventListener('click', makeMove);
    });
    currentPlayer = move_X;
    totalMoves = 0;
    map1 = new Map();
    map2 = new Map();
  }, 500);
};

resetBtn.addEventListener('click', restartGame);
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