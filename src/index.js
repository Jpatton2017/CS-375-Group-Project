import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import './App.scss';
import App from "./App";


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(35).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? '1' : '2';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  render() {
    const status = (this.state.xIsNext);

    return (

      <div>
        <div id="status" className="status" >{status}</div>
        <div id="days-of-week" className="days-of-weeks">
          <tr id="squares-row0">
            <th id="square0">{this.renderSquare(0)}</th>
            <th id="square1">{this.renderSquare(1)}</th>
            <th id="square2">{this.renderSquare(2)}</th>
            <th id="square3">{this.renderSquare(3)}</th>
            <th id="square4">{this.renderSquare(4)}</th>
            <th id="square5">{this.renderSquare(5)}</th>
            <th id="square6">{this.renderSquare(6)}</th>
          </tr>
        </div>
        <div id="week1" className="board-row">
          <tr id="squares-row1">
            <th id="square7">{this.renderSquare(7)}</th>
            <th id="square8">{this.renderSquare(8)}</th>
            <th id="square9">{this.renderSquare(9)}</th>
            <th id="square10">{this.renderSquare(10)}</th>
            <th id="square11">{this.renderSquare(11)}</th>
            <th id="square12">{this.renderSquare(12)}</th>
            <th id="square13">{this.renderSquare(13)}</th>
          </tr>
        </div>
        <div id="week2" className="board-row">
          <tr id="squares-row2">
            <th id="square14">{this.renderSquare(14)}</th>
            <th id="square15">{this.renderSquare(15)}</th>
            <th id="square16">{this.renderSquare(16)}</th>
            <th id="square17">{this.renderSquare(17)}</th>
            <th id="square18">{this.renderSquare(18)}</th>
            <th id="square19">{this.renderSquare(19)}</th>
            <th id="square20">{this.renderSquare(20)}</th>
          </tr>
        </div>
        <div id="week3" className="board-row">
          <tr id="squares-row3">
            <th id="square21">{this.renderSquare(21)}</th>
            <th id="square22">{this.renderSquare(22)}</th>
            <th id="square23">{this.renderSquare(23)}</th>
            <th id="square24">{this.renderSquare(24)}</th>
            <th id="square25">{this.renderSquare(25)}</th>
            <th id="square26">{this.renderSquare(26)}</th>
            <th id="square27">{this.renderSquare(27)}</th>
          </tr>
        </div>
        <div id="week4" className="board-row">
          <tr id="squares-row4"></tr>
            <th id="square28">{this.renderSquare(28)}</th>
            <th id="square29">{this.renderSquare(29)}</th>
            <th id="square30">{this.renderSquare(30)}</th>
            <th id="square31">{this.renderSquare(31)}</th>
            <th id="square32">{this.renderSquare(32)}</th>
            <th id="square33">{this.renderSquare(33)}</th>
            <th id="square34">{this.renderSquare(34)}</th>
        </div>
        <div id="week5" className="board-row">
          <tr id="squares-row5">
            <th id="square35">{this.renderSquare(35)}</th>
            <th id="square36">{this.renderSquare(36)}</th>
            <th id="square37">{this.renderSquare(37)}</th>
            <th id="square38">{this.renderSquare(38)}</th>
            <th id="square39">{this.renderSquare(39)}</th>
            <th id="square40">{this.renderSquare(40)}</th>
            <th id="square41">{this.renderSquare(41)}</th>
          </tr>
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <div id="set-up">
    <App />,
    <Game />,
  </div>,
  document.getElementById('root')
);
  
