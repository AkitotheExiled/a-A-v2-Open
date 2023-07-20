const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("return", "Enters the users mark :)", this.cursor.placeMark.bind(this.cursor, this.playerTurn));
    Screen.addCommand("up", "Moves the cursor up", this.cursor.up.bind(this.cursor));
    Screen.addCommand("down", "Moves the cursor down", this.cursor.down.bind(this.cursor));
    Screen.addCommand("left", "Moves the cursor left", this.cursor.left.bind(this.cursor));
    Screen.addCommand("right", "Moves the cursor right", this.cursor.right.bind(this.cursor));
    Screen.render();
  }

  static placeMark() {
    
  }
  static _checkFullBoard(grid) {
    const isEmpty = (space) => space === " ";
    for (let row of grid) {
      if (row.some(isEmpty)) {
        return false;
      }
    }

    return true;
  }
  static _checkIfEmpty(grid) {

    const isEmpty = (space) => space === " ";
    for (let row of grid) {
      if (!row.every(isEmpty)) {
        return false;
      }
    }

    return true;
  }

  static _getNonNull(first, second) {

    if (first !== null) {
      return first;
    } else if (second !== null) {
      return second;
    }
    return null;
  }
  static _checkHorizontals(grid) {
    for (let row of grid) {

      let first = row[0], second = row[1], third = row[2];
      if ((first === second && second === third) && (!this._checkIfEmpty([[first, second, third]]))) {
        return first;
      }
    }
    return null;
  }

  static _checkVerticals(grid) {
    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid.length; row++) {
        let first = grid[row][col];
        let second = grid[row + 1][col];
        let third = grid[row + 2][col];
        if ((first === second && second === third) && (!this._checkIfEmpty([[first, second, third]]))) {
          return first;
        }
        break;
      }
    }
    return null;
  }

  static _checkDiagnoals(grid) {
    let diag1 = this._checkHorizontals([[grid[0][0], grid[1][1], grid[2][2]]]);
    let diag2 = this._checkHorizontals([[grid[2][0], grid[1][1], grid[0][2]]]);
    let getNonNull = this._getNonNull(diag1, diag2);
    if (getNonNull !== null) {
      return getNonNull;
    }
    return null;
  }
  static checkWin(grid) {
    if (this._checkIfEmpty(grid)) {

      return false;
    } else {

      let diaWinner = this._checkDiagnoals(grid);
      if (diaWinner !== null) {
        return diaWinner;
      }

      let horWinner = this._checkHorizontals(grid);
      if (horWinner !== null) {
        return horWinner;
      }

      let verWinner = this._checkVerticals(grid);
      if (verWinner !== null) {
        return verWinner;
      }

      let fullBoard = this._checkFullBoard(grid);
      if (fullBoard) {
        return "T";
      }

      return false;
    }
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

    static run(tttInstance) {

    }
}


module.exports = TTT;
