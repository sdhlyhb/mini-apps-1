import React, { component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return(
      <div>
        <h1>Welcome to Connect 4 game!</h1>

        <Board />

        <button>Start New Game</button>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));