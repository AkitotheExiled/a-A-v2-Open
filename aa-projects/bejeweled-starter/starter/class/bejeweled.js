const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = [];
    this.numRows = 8;
    this.numCols = 8;


    for (let row = 0; row < this.numRows; row++) {
      this.grid.push(new Array(this.numCols).fill(" "));
    }
    this.fillBoard();

    this.cursor = new Cursor(this.numRows, this.numCols);

    Screen.initialize(this.numRows, this.numCols);
    Screen.setGridlines(false);



    Screen.addCommand("return", "Select the positon", this.handleSwap.bind(this));
    Screen.addCommand("up", "Moves the cursor up", this.cursor.up.bind(this.cursor));
    Screen.addCommand("down", "Moves the cursor down", this.cursor.down.bind(this.cursor));
    Screen.addCommand("left", "Moves the cursor left", this.cursor.left.bind(this.cursor));
    Screen.addCommand("right", "Moves the cursor right", this.cursor.right.bind(this.cursor));
    Screen.updateGrid(this.grid);
    Screen.render();

  }


  _compareTwoGrids(grid1, grid2) {
    let gridString1 = JSON.stringify(grid1);
    let gridString2 = JSON.stringify(grid2);

    if (gridString1 !== gridString2) {
      return false;
    }

    return true;
  }

  _handleMoveSwitch(prevMove) {
    let prevSelected = prevMove[0];
    let selected = prevMove[1];
    let temp;
    temp = this.grid[prevSelected[0]][prevSelected[1]];
    this.grid[prevSelected[0]][prevSelected[1]] = this.grid[selected[0]][selected[1]];
    this.grid[selected[0]][selected[1]] = temp;
  }

  handleSwap() {
    this.cursor.select();
    let updateGridBool = this._compareTwoGrids(this.grid, Screen.grid);

    if (updateGridBool) {
      this.grid = Screen.grid;
      let posMatch = Bejeweled.checkForMatches(this.grid)
      if (posMatch !== false) {
        this._removeMatchesGivenStartPos(posMatch);
        this.populateEmptyRows();
      } else if (this.cursor.prevMove.length > 0 && posMatch === false) {
        this._handleMoveSwitch(this.cursor.prevMove);
        Screen.updateGrid(this.grid);
      }
    }
  }


  _random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  _twoInRow(array, element) {
    let startPos = this._random(0, array.length - 1);
    let endPos = startPos + 2;

    return array.fill(element, startPos, endPos);
  }

  _threeSpreadOut(array, element) {
      let randomStart = this._random(0, array.length - 3);
      array.fill(element, randomStart, randomStart + 1);
      array.fill(element, randomStart + 2, randomStart + 3);

      return array.fill(element, randomStart + 3, randomStart + 4);

  }

  _twoSpreadOut(array, element) {
    let randomStart = this._random(0, array.length);
    array.fill(element, randomStart, randomStart + 1);

    let emptySpots = array.map(function (spot, index) {
      if (spot === " ") {
        return index;
      };
    });

    let randomEnd = emptySpots[this._random(0, emptySpots.length)];
    return array.fill(element, randomEnd, randomEnd + 1);
  }

  _fillRandom(array, arrayOfElements) {

    let emptySpots = array.map(function (spot, index) {
      if (spot === " ") {
        return index;
      };
    }).filter(ele => ele !== undefined);

    for (let spot of emptySpots) {
      let randomElement = arrayOfElements[this._random(0, arrayOfElements.length)];
      array[spot] = randomElement;
    }

    return array;
  }


  fillBoard() {
    const boardFillLogic = {
      choices: [
        {function: this._twoInRow.bind(this), cost: 2},
        {function: this._twoSpreadOut.bind(this), cost: 2},
        {function: this._threeSpreadOut.bind(this), cost: 4}
      ]
    }
    let validElements = Bejeweled.validElements;
    for (let row of this.grid) {
      let gridPoints = 4;
      let elementsNotValid = [];

      while (gridPoints > 0) {
        let randomElement = validElements[this._random(0, validElements.length)];
        elementsNotValid.push(randomElement);
        let numberOfChoices = boardFillLogic["choices"].length;
        let randomChoice = boardFillLogic["choices"][this._random(0, numberOfChoices)];

        let choice = randomChoice["function"];
        choice(row, randomElement);
        gridPoints -= randomChoice["cost"];
      }
      let elementsToFill = validElements.filter(element => !elementsNotValid.includes(element));

      this._fillRandom(row, elementsToFill);

    }
  }




   _removeMatchesGivenStartPos(obj, char = " ") {


    let type = obj.type;
    let row = obj.pos.row;
    let col = obj.pos.col;

    if (type === "row") {

      for (let i = col; i < col + 3; i++) {
        this.grid[row][i] = char;
      }
    } else {

      for (let i = row; i < row + 3; i++) {
        this.grid[i][col] = char;
      }
    }
  }


  populateEmptyRows() {
    let emptyRowIndex;
    let emptyColIndex;
    let noEmpties = false;
    // find the row containing the first empty string

    for (let row of this.grid) {
      let rowContainsEmpties = row.some(ele => ele === " ");
      if (rowContainsEmpties) {
        emptyRowIndex = this.grid.findIndex((indRow) => JSON.stringify(indRow) === JSON.stringify(row));
        emptyColIndex = row.findIndex((ele) => ele === " ");
        break;
      }

    }

    if (emptyRowIndex === undefined) {
      return;
    }

    // Anything above it?
    // No?
    if (emptyRowIndex === 0) {
      let temp = this.grid[emptyRowIndex];
      let filteredElements = this.grid[emptyRowIndex].filter((ele, index, arr) => arr.indexOf(ele) === index);
      let validElements = Bejeweled.validElements.filter(ele => !filteredElements.includes(ele));
      this.grid[emptyRowIndex] = this._fillRandom(temp, validElements);

    } else {


    for (let col = emptyColIndex; col < col + 3; col++) {
      noEmpties = this.grid[emptyRowIndex].some(ele => ele === " ");
      if (!noEmpties) {
        break;
      }
      let prevColElement = this.grid[emptyRowIndex - 1][col];
      this.grid[emptyRowIndex][col] = prevColElement;

      this.grid[emptyRowIndex - 1][col] = " ";

    }

  }
  this.populateEmptyRows();
  }

  handleGameLogic() {
    if (!Bejeweled.anyValidMoves(grid)) {
      return;
    } else {
      this.handleSwap();
    }
  }

  static checkForMatches(grid) {

    let horWinner = Bejeweled._checkHorizontals(grid);
    let vertWinner = Bejeweled._checkVerticals(grid);

    if (horWinner !== null || vertWinner !== null) {
      let winner = Bejeweled._getNonNull(horWinner, vertWinner);

      return winner;
    }
    return false;

  }


  static validElements = ["🍊", "🍇", "🥝", "🥥", "🍓", "🍋"];

  static _checkHorizontals(grid) {

    for (let row of grid) {

      for (let j = 0; j < row.length - 2; j++) {
        let ele1 = row[j];
        let ele2 = row[j + 1];
        let ele3 = row[j + 2];

        if (ele1 === ele2 && ele1 === ele3) {
          let col = grid.findIndex((indRow) => JSON.stringify(indRow) === JSON.stringify(row));
          return {type: "row", pos: {row: col, col: j}};
        }
      }
    }
    return null;
  }

  static _checkVerticals(grid) {
    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid.length - 2; row++) {
        let first = grid[row][col];
        let second = grid[row + 1][col];
        let third = grid[row + 2][col];
        if ((first === second && second === third)) {
          return {type: "col", pos: {row: row, col: col}};
        }

      }
    }
    return null;
  }
  static _getNonNull(item, item2) {
    if (item === null) {
      return item2;
    }

    return item;
  }

  static anyValidMoves(grid) {
    for (let row = 0; row < grid.length - 1; row++) {
      for (let col = 0; col < grid[row].length - 1; col++) {
        let arrayForCol = [];
        let initialElement = grid[row][col];
        let elementToSwap = grid[row][col + 1];
        let elementInNextRow = grid[row + 1][col];
        grid[row][col] = elementToSwap;
        grid[row][col + 1] = initialElement;
        let anyMatches = Bejeweled.checkForMatches(grid);

        if (anyMatches !== false) {
          console.log(grid);
          return true;
        }

        grid[row][col] = elementInNextRow;
        grid[row][col + 1] = elementToSwap;

        grid[row + 1][col] = initialElement;


        let anyMatchesCol = Bejeweled.checkForMatches(grid);

        if (anyMatchesCol !== false) {
          console.log(grid);
          return true;
        }
      }
    }
    return false;
  }


}




module.exports = Bejeweled;
