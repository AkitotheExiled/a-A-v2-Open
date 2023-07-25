const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';
    this.swapColor = 'blue';
    this.selected = null;
    this.prevMove = [];
  }

  resetBGColorAtPos(row, col) {
    Screen.setBackgroundColor(row, col, this.gridColor);
  }

  resetBackgroundColor() {
    if (this.selected !== null) {
      if (JSON.stringify(this.selected) !== JSON.stringify([this.row, this.col])) {
        Screen.setBackgroundColor(this.row, this.col, this.gridColor);
      }
    } else {
      Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    }

  }

  setBackgroundColor(swap = null) {
    if (swap !== null && this.selected !== null) {
      Screen.setBackgroundColor(this.row, this.col, this.swapColor);
    } else {
      if (this.selected !== null) {
        if ((JSON.stringify(this.selected) !== JSON.stringify([this.row, this.col]))) {
          Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
        }
      } else {
        Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
      }
    }

  }

  up() {

    this.resetBackgroundColor();
    if (this.row - 1 < 0) {
      return;
    }

    this.row--;
    this.setBackgroundColor();
  }

  down() {

    this.resetBackgroundColor();
    if (this.row + 1 > 7) {
      return;
    }

    this.row++;
    this.setBackgroundColor();

  }

  left() {

    this.resetBackgroundColor();
    if (this.col - 1 < 0) {
      return;
    }

    this.col--;
    this.setBackgroundColor();

  }

  right() {

    this.resetBackgroundColor();
    if (this.col + 1 > 7) {
      return;
    }

    this.col++;
    this.setBackgroundColor();

  }

  select() {
    this.resetBackgroundColor();
    if (this.selected === null) {
      this.selected = [this.row, this.col];
      this.setBackgroundColor(true);
    } else if (JSON.stringify(this.selected) === JSON.stringify([this.row, this.col])) {
      this.selected = null;
      this.resetBackgroundColor();
    } else if (JSON.stringify(this.selected) !== JSON.stringify([this.row, this.col])) {
      let canSwap = this.swap();
      if (canSwap !== false) {
        this.resetBackgroundColor();
      }
    }

  }

  swap() {
    if (this.selected === null) return;

    let rowDiff = Math.abs(this.selected[0] - this.row) > 1;
    let colDiff = Math.abs(this.selected[1] - this.col) > 1;

    if(rowDiff || colDiff) {
      return false;
    } else {
      this.resetBGColorAtPos(this.selected[0], this.selected[1]);
      if (Screen.initialized) {
        this.prevMove = [this.selected, [this.row, this.col]];
        Screen.swapPositionsOnGrid(this.selected, [this.row, this.col]);
      }
      this.selected = null;


    }
  }
}


module.exports = Cursor;
