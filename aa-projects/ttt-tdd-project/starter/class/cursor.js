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

  placeMark(player) {
    let curChar = Screen.getGrid(this.row, this.col);

    if (player === "X") {
      if (curChar === " " || curChar === "_") {
        Screen.setGrid(this.row, this.col, "X");
        return true;
      } else {
        return false;
      }

    } else {

      if (curChar === " " || curChar === "_") {
        Screen.setGrid(this.row, this.col, "O");
        return true;
      } else {
        return false;
      }
    }
  }

  up() {
    this.resetBackgroundColor();

    if (this.row === 0 || this.row - 1 < 0) {
      this.row = 0;
      return;
    }

    this.row -= 1;
    this.setBackgroundColor();


}

  down() {

    this.resetBackgroundColor();

    if (this.row === 2 || this.row + 1 >= 3) {
      this.row = 2;
      return;
    }
    this.row += 1;

    this.setBackgroundColor();
  }

  left() {

    this.resetBackgroundColor();

    if (this.col === 0 || this.col - 1 < 0) {
      this.col = 0;
      return;
    }
    this.col -= 1;

    this.setBackgroundColor();
  }

  right() {

    this.resetBackgroundColor();

    if (this.col === 2 || this.col + 1 >= 3) {
      this.col = 2;
      return;
    }

    this.col += 1;
    this.setBackgroundColor();
  }

}


module.exports = Cursor;
