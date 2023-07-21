const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('return', 'Place mark', this.placeMark.bind(this));
    Screen.addCommand('left', 'Go left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'Go right', this.cursor.right.bind(this.cursor));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  getEmptyColSpot(grid, colAt) {
    for (let row = grid.length - 1; row >= 0; row--) {
      let spot = grid[row][colAt];
      if (spot === " ") {
        return [row, colAt];
      }
    }
    return null;

  }

  switchTurn() {
    this.playerTurn = this.playerTurn === "O" ? "X" : "O";
  }
  placeMark() {
    let pos = this.cursor.getPos();
    let row = pos[0];
    let col = pos[1];
    let openSpot = this.getEmptyColSpot(this.grid, col);

    if (openSpot !== null) {
      this.grid[openSpot[0]][openSpot[1]] = this.playerTurn;
      Screen.grid[openSpot[0]][openSpot[1]] = this.playerTurn;
      this.switchTurn();
      let hasWon = ConnectFour.checkWin(this.grid);
      if (hasWon) {
        ConnectFour.endGame(hasWon);
      }
      Screen.setMessage(`Players turn: ${this.playerTurn}`);
    } else {
      Screen.setMessage(`No Open spots :/`);
    }



  }

  static _checkBoard(grid, char, equalBool) {
    for (let subgrid of grid) {
      let row;
      if (equalBool) {
        row = subgrid.every((cell) => cell === char);
      } else {
        row = subgrid.every((cell) => cell !== char);
      }

      if (!row) {
        return false;
      }
    }

    return true;
  }

  static _isEmpty(grid) {
    return ConnectFour._checkBoard(grid, " ", true);
  }

  static _fullBoard(grid) {
    return ConnectFour._checkBoard(grid, " ", false);
  }



  static _fourInARow(array) {

    let count = 0;
    let winner;
    for (let i = 0; i < array.length; i++) {
      let char = array[i];
      let nextChar = array[i + 1];
      if (count >= 3) {
        return char;
      }
      if (char === nextChar && char !== " ") {
        count++;
      } else {
        count = 0;
      }
    }


    return null;
  }

  static _checkVertical(grid) {

    for(let col = 0; col < grid[0].length; col++) {
      let vertical = [];

      for(let row = 0; row < grid.length; row++) {
        vertical.push(grid[row][col]);
      }

      let winner = ConnectFour._fourInARow(vertical);
      if (winner !== null) {
        return winner;
      }
    }

    return false;
  }

  static _checkHorizontal(grid) {
    for (let row of grid) {
      let winner = ConnectFour._fourInARow(row);
      if (winner !== null) {
        return winner;
      }
    }
    return false;
  }



  static _findAllCoordinates(grid) {
    const coords = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        coords.push([i, j]);
      }
    }
    return coords;
  }

  static _calcSlope(coord1, coord2) {
    return (coord2[1] - coord1[1]) / (coord2[0] - coord1[0]);
  }

  static _onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  static _findDiagonalsWithGivenSlope(coords, slope) {
    let downwardCoords = [];
    for (let i = 0; i < coords.length; i++) {

      let coord1 = coords[i];
      let line = [coord1];

      for (let j = i + 1; j < coords.length; j++) {
          let coord2 = coords[j];

          if (ConnectFour._calcSlope(coord1, coord2) === slope) {
            line.push(coord2);
          }
      }
      downwardCoords.push(line);
    }

    return downwardCoords.filter((array) => array.length > 3);
  }

  static _checkDiag(grid, coords) {
    for (let coord of coords) {
      let result = coord.map((indCoord) => grid[indCoord[0]][indCoord[1]]);
      let win = ConnectFour._fourInARow(result);
      if (win) {
        return win;
      }
    }
    return false;
  }



  static checkWin(grid) {
    const gridCoords = ConnectFour._findAllCoordinates(grid);
    let isEmpty = ConnectFour._isEmpty(grid);
    let isFull = ConnectFour._fullBoard(grid);
    if (isEmpty) {
      return false;
    } else {
      let checkHorizontal = ConnectFour._checkHorizontal(grid);
      if (checkHorizontal !== false) {
        return checkHorizontal;
      }

      let checkVertical = ConnectFour._checkVertical(grid);
      if (checkVertical !== false) {
        return checkVertical;
      }

      let CoordDownDiag = ConnectFour._findDiagonalsWithGivenSlope(gridCoords, 1);
      let CoordUpDiag = ConnectFour._findDiagonalsWithGivenSlope(gridCoords, -1);

      let checkDownDiag = ConnectFour._checkDiag(grid, CoordDownDiag);
      let checkUpDiag = ConnectFour._checkDiag(grid, CoordUpDiag);

      if (checkDownDiag !== false) {
        return checkDownDiag;
      }

      if (checkUpDiag !== false) {
        return checkUpDiag;
      }
      let tie = [checkHorizontal, checkVertical, checkDownDiag, checkUpDiag].every((bool) => bool === false);
      if (tie && isFull) {
        return "T";
      }
    }
    return false;
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

}

console.log(1 & 1);
module.exports = ConnectFour;
