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

  getPos() {
    return [this.row, this.col];
  }

  left() {
    this.resetBackgroundColor();

    if (this.col - 1 < 0) {
      return;
    }

    this.col -= 1;
    this.setBackgroundColor();
  }

  right() {
    this.resetBackgroundColor();

    if (this.col + 1 > 6) {
      return;
    }

    this.col += 1;
    this.setBackgroundColor();
  }

  down() {
    this.resetBackgroundColor();

    if (this.row + 1 > 6) {
      return;
    }

    this.row += 1;
    this.setBackgroundColor();
  }

  up() {
    this.resetBackgroundColor();

    if (this.row - 1 < 0) {
      return;
    }

    this.row -= 1;
    this.setBackgroundColor();
  }
}


module.exports = Cursor;
