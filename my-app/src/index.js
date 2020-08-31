import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//component to create squares
class Square extends React.Component {
    render() {
      return (
        <button className="square" 
          onClick={() => this.props.onClick()  
        }>
          {this.props.value}
        </button>
      );
    }
  }
  //component to create the board
  class Board extends React.Component {
    //baord's intial state to contain an array of 9 nulls correspoding to 9 squares
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    //render contents inside the squares
    renderSquare(i) {
      return <Square 
            //assign intial state of squares
            value={this.state.squares[i]} 
            //handle clicks on square
            onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  //create the skeleton for the game
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  //render the game under the id root
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  