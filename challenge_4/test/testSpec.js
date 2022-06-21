const chai = require('chai');
const should = chai.should();
const expect = chai.expect;


//winning logics:

let emptyBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];


function checkVertical(board) {
  for(let row = 3; row < 6; row++) {
    for(let col = 0; col < 7; col++) {
      if(board[row][col] !==null) {
        if(board[row][col] === board[row - 1][col] &&
          board[row][col] === board[row - 2][col] &&
          board[row][col] === board[row - 3][col]
          ) {
            return board[row][col]; //return 1 or 2 to indicate which play is winner;
          }
      }
    }
  }

}

function checkHorizontal(board) {
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col]) {
        if (board[row][col] === board[row][col + 1] &&
            board[row][col] === board[row][col + 2] &&
            board[row][col] === board[row][col + 3]) {
          return board[row][col];
        }
      }
    }
  }
}

function checkDiag1(board) {
  for (let row = 3; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col]) {
        if (board[row][col] === board[row - 1][col + 1] &&
            board[row][col] === board[row - 2][col + 2] &&
            board[row][col] === board[row - 3][col + 3]) {
          return board[row][col];
        }
      }
    }
  }
}



function checkDiag2(board) {
  for (let row = 3; row < 6; row++) {
    for (let col = 3; col < 7; col++) {
      if (board[row][col]) {
        if (board[row][col] === board[row - 1][col - 1] &&
            board[row][col] === board[row - 2][col - 2] &&
            board[row][col] === board[row - 3][col - 3]) {
          return board[row][col];
        }
      }
    }
  }

}

//if the board is full and no winner
function checkBoardFull(board) {

  for(let row = 0; row < 6; row++) {
    for(let col = 0; col < 7; col++) {
      if(board[row][col] === null) {
        return null;
      }
    }
    return 3;
  }


}

function checkWinner(board) {
  let result_vertical = checkVertical(board);
  let result_horizontal = checkHorizontal(board);
  let result_Diag1 = checkDiag1(board);
  let result_Diag2 = checkDiag2(board);
  let checkDraw = checkBoardFull(board);



  if(result_vertical === 1) {
    return 'Player1 Wins Vertically!';
  } else if(result_vertical === 2) {
    return 'Player2 Wins Vertically!';
  }

  if(result_horizontal === 1) {
    return 'Player1 Wins Horizontally!';
  } else if(result_horizontal === 2) {
    return 'Player2 Wins Horizontally!';
  }

  if(result_Diag1 === 1 ||result_Diag2 === 1  ) {
    return 'Player1 Wins Diagonally!';
  } else if(result_Diag1 === 2 ||result_Diag2 === 2) {
    return 'Player2 Wins Diagonally!';
  }

  if(checkDraw === 3) {
    return 'it is a tie!';
  }


};


describe('Connect Game Four test', function () {

  describe('Connect 4 Winning logics', function(){
    it('should find which player wins vertically: case1', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, null, null, 1, null, 2, null],
        [null, null, null, null, 1, 2, null],
        [null, null, null, null, 1, 2, null],
        [null, null, null, null, 1, 2, null],
        [null, null, null, null, null, null, null],

      ];
      expect(checkWinner(board)).to.equal("Player2 Wins Vertically!");
    });

    it('should find which player wins vertically: case2', function() {
      let board = [
        [null, null, null, null, null, null, 2],
        [null, null, null, 1, 1, null, null],
        [null, null, null, null, 1, 2, null],
        [null, null, null, null, 1, 2, null],
        [null, null, null, null, 1, 2, null],
        [null, null, null, null, null, null, null],

      ];
      expect(checkWinner(board)).to.equal("Player1 Wins Vertically!");
    });

    it('should find which player wins horizontally: case1', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, 1, 1, 1, 1, null, null],
        [null, null, null, null, null, 2, null],
        [null, null, null, null, null, 2, null],
        [null, null, null, null, null, 2, null],
        [null, null, null, null, null, null, null],

      ];
      expect(checkWinner(board)).to.equal("Player1 Wins Horizontally!");
    });

    it('should find which player wins horizontally: case2', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, 2, 2, 2, 2, null, null],
        [null, null, null, null, null, 1, null],
        [null, null, null, null, null, 1, null],
        [null, null, null, null, null, 1, null],
        [null, null, null, null, null, null, 1],

      ];
      expect(checkWinner(board)).to.equal("Player2 Wins Horizontally!");
    });

    it('should find which player wins in major diagonal or minor diagonal: case1', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 1, null, null, null, null, null],
        [null, null, 1, null, null, null, null],
        [null, null, null, 1, null, null, null],
        [null, null, null, 2, 1, 2, 2],

      ];
      expect(checkWinner(board)).to.equal("Player1 Wins Diagonally!");
    });

    it('should find which player wins in major diagonal or minor diagonal: case2', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, 1, null],
        [null, null, null, null, 1, null, null],
        [null, null, null, 1, null, null, null],
        [null, 2, 1, 2, 1, 2, 2],

      ];
      expect(checkWinner(board)).to.equal("Player1 Wins Diagonally!");
    });

    it('should find which player wins in major diagonal or minor diagonal: case3', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, 2, null],
        [null, null, null, null,2, null, null],
        [null, null, null, 2, null, null, null],
        [1, 1, 2, 1, 1, 1, null],

      ];
      expect(checkWinner(board)).to.equal("Player2 Wins Diagonally!");
    });


    it('should find which player wins in major diagonal or minor diagonal: case3', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, 2, null, null, null, null, null],
        [null, null, 2, null,null, null, null],
        [null, null, null, 2, null, null, null],
        [1, 1, null, 1, 2, 1, 1],

      ];
      expect(checkWinner(board)).to.equal("Player2 Wins Diagonally!");
    });

    it('should find which player wins in major diagonal or minor diagonal: case4', function() {
      let board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, 2, null],
        [null, null, null, null,2, null, null],
        [null, null, null, 2, null, null, null],
        [1, 1, 2, 1, null, 1, 1],

      ];
      expect(checkWinner(board)).to.equal("Player2 Wins Diagonally!");
    });


    it('should check results when the game is a tie', function() {
      let board = [
        [2, 2, 2, 1, 2, 1, 2],
        [1, 1, 1, 2, 1, 2, 1],
        [2, 2, 1, 2, 1, 2, 2],
        [1, 1, 2, 1, 2, 1, 1],
        [2, 1, 2, 1, 2, 1, 2],
        [1, 2, 1, 2, 1, 2, 1],

      ];
      expect(checkWinner(board)).to.equal('it is a tie!');
    });




  })





})