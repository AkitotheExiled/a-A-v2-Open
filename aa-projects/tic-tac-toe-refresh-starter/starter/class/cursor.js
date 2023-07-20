const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  printCurPos() {
    console.log(`Currently at: [${this.row}, ${this.col}]`);
  }

  placeMark(player) {
    if (player === "X") {
      Screen.setGrid(this.row, this.col, "X");
    } else {
      Screen.setGrid(this.row, this.col, "O");
    }
  }
  up() {
    this.printCurPos();
    this.resetBackgroundColor();
    if (this.row === 0 || this.row - 1 < 0) {
      this.row = 0;
      return;
    }
    this.row -= 1;
    Screen.setGrid(this.row, this.col, "_");
    this.setBackgroundColor();
  }

  down() {
    this.printCurPos();
    this.resetBackgroundColor();

    if (this.row === 2 || this.row + 1 >= 3) {
      this.row = 2;
      return;
    }
    this.row += 1;
    Screen.setGrid(this.row, this.col, "_");
    this.setBackgroundColor();
  }

  left() {
    this.printCurPos();
    this.resetBackgroundColor();

    if (this.col === 0 || this.col - 1 < 0) {
      this.col = 0;
      return;
    }
    this.col -= 1;
    Screen.setGrid(this.row, this.col, "_");
    this.setBackgroundColor();
  }

  right() {
    this.printCurPos();
    this.resetBackgroundColor();

    if (this.col === 2 || this.col + 1 >= 3) {
      this.col = 2;
      return;
    }

    this.col += 1;
    Screen.setGrid(this.row, this.col, "_");
    this.setBackgroundColor();
  }

}


module.exports = Cursor;
