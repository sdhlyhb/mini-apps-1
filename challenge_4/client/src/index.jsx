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
      hasWinner: false,
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
      hasWinner: false,
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

    for(var rowIndex = 5; rowIndex >=0; rowIndex--) {
      if(curBoard[rowIndex][colIndex] === null) {
        curBoard[rowIndex][colIndex] = this.state.currentPlayer;

        break;

      }
    }
    this.setState({board: curBoard});

    this.togglePlayer();
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

        <button>Start New Game</button>
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