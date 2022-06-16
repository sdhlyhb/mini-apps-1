import React, { component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: 1,
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
      gameOver: false,
      message: 'no winner yet!'

    }
  }

  componentDidMount() {

    this.emptyBoard();

  }

  emptyBoard() {
    this.setState({
      player1: 1,
      player2: 2,
      currentPlayer: 1,
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
      gameOver: false,
      message: 'no winner yet!'
    });
  }

  togglePlayer() {
    if(this.state.currentPlayer === this.state.player1) {
      this.setState({
        currentPlayer: 2
      })
    } else {
      this.setState({
        currentPlayer: 1
      })
    }
  }

  makeMove(colIndex, curBoard) {
    if (!this.state.gameOver) {
      for (var rowIndex = 5; rowIndex >= 0; rowIndex--) {
        if (curBoard[rowIndex][colIndex] === null) {
          curBoard[rowIndex][colIndex] = this.state.currentPlayer;

          break;

        }
      }
      this.setState({ board: curBoard });
      let res = this.checkWinner(this.state.board);
      if (res === 1) {
        this.setState({
          gameOver: true,
          message: 'The winner is player1!'
        })
      } else if (res === 2) {
        this.setState({
          gameOver: true,
          message: 'The winner is player2!'
        })
      } else if (res === 3) {
        this.setState({
          gameOver: true,
          message: 'Boad is full, it is a Tie!'
        })


      } else {

        this.togglePlayer();
      }


    } else {
      this.setState({
        message: 'Game Over! No More Moves!'
      })
    }


  }

  checkWinner(board) {
    return this.checkVertical(board) || this.checkHorizontal(board) || this.checkDiag1(board) || this.checkDiag2(board) || this.checkBoardFull(board)

  }

  checkVertical(board) {
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

  checkHorizontal(board) {
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



  checkDiag1(board) {
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



  checkDiag2(board) {
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
  checkBoardFull(board) {

    for(let row = 0; row < 6; row++) {
      for(let col = 0; col < 7; col++) {
        if(board[row][col] === null) {
          return null;
        }
      }
      return 3;
    }


  }

  resetGame() {
    this.emptyBoard();
  }















  render() {
    return(
      <div>
        <h1>Welcome to Connect 4 game!</h1>

        <Board
        makeMove = {this.makeMove.bind(this)}
        currentPlayer={this.state.currentPlayer}
        curBoard = {this.state.board}

        />

        <button onClick={this.resetGame.bind(this)}>Start New Game</button>
        <div id="msg">
          {this.state.message}
          <br />
          Current Player: {'Player' + this.state.currentPlayer}

        </div>

      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));