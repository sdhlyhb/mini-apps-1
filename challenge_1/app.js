//alert('Welcome to Tic Tac Toe!!');
let move_X = 'X';
let move_O = 'O';
let currentPlayer = move_X;
let totalMoves = 0;
const winningIndexCombo = ['012', '048', '036','147','258','246','345','678'];
let arr1 = []; //indexes for move_X player;
let arr2 = []; //indexes for move_O player;


var makeMove = function(event) {
  console.log('a move is made!!!');
  event.target.innerText = currentPlayer;
  totalMoves++;
  if(currentPlayer === move_X) {
    arr1.push(event.target.id);
    console.log('arr1:', arr1.sort());
    checkWinner();
    currentPlayer = move_O;
  } else {
    arr2.push(event.target.id);
    console.log('arr2:', arr2.sort());
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

var checkWinner = function() {
  if(totalMoves >= 5 && totalMoves <=9) {
    var str1 = arr1.sort().join();
    var str2 = arr2.sort().join();
    for(var i = 0; i < winningIndexCombo.length; i++) {
      if(isSubset(str1, winningIndexCombo[i])) {
        console.log('Player 1 wins!!!');
        return 'Player1';
      } else if (isSubset(str2, winningIndexCombo[i])) {
        console.log('player 2 wins!!!!');
        return 'Player2';
      }
    }



  }
  console.log('no winner!!');
}



//restart game will empty the board and make the first move back to X.
var restartGame = function(){
  setTimeout(() =>{
    boxes.forEach(box => {
      box.innerText = '';
    });
    currentPlayer = move_X;
    arr1 = [];
    arr2 = [];
  }, 500);
};

resetBtn.addEventListener('click', restartGame);
restartGame();
startingBoard();


//helperFunction: baseStr.length >= sub.length(3 digits str in this case);
var isSubset = function(base, sub) {
  for(var i = 0; i < sub.length; i++) {
    if(!base.includes(sub[i])){
      return false;
    }
  }
  return true;


}