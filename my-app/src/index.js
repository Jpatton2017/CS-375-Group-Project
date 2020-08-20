import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

/* NOTE "type": "module" line was added to package.json */
// NOTE Instances of the Square class are considered "controlled components"
  // This is because they are now all controlled by the Board component
    // Think of the Square component as a child class and the Board component
    // as its parent class (if this were Python)
/*
NOTE This code block was replaced by the Square function below
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
*/
function Square(props) {
  return (
    //NOTE that onClick={() => this.props.onClick()} got changed to onClick={props.onClick}
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    // NOTE You have to call this method every time you add a
    // constructor to a React Component
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    /*
    NOTE .slice() creates a copy of the squares array.
      This allows us to make changes to the copy, while preserving the original version
      of the array.
    */
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      // Specifies some of the properties for the Square class
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        /*
        NOTE This onClick doesn't mean anything special b/c it belongs to a custom
        component. onClick does have a special meaning to React when not used in a
        custom component b/c it assumes that you are referring to the onClick attribute
        belonging to a DOM <button> element

        NOTE DOM <button> element = built-in React Component
          - Components are to React as elements are to the DOM
          - Preexisting DOM elements have corresponding React Components that have
            already been defined
          - Custom components (like Board and Square for our tic-tac-toe board)
            do not have any ties to preexisting DOM built-in elements
            - This means that any event handlers defined w/n these custom components
              exist in their own special world (or country), meaning that all preexisting
              DOM event handlers have no power w/n custom components since
              these component "countries" are out of the jursidiction of the
              event handlers that came from the DOM default "country"
        */

      />
    ); // NOTE () after return prevent JavaScript from inserting a ; and breaking our code
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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
