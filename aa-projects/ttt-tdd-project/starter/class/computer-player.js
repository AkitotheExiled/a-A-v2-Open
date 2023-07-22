const TTT = require("./ttt.js");
class ComputerPlayer {

  static getValidMoves(grid) {
    let validSpots = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        let spot = grid[i][j];
        if (spot === " ") {
          validSpots.push({ row: i, col: j });
        }
      }
    }

    return validSpots;
  }

  static _random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  static randomMove(grid) {
    let validMoves = ComputerPlayer.getValidMoves(grid);

    return validMoves[ComputerPlayer._random(0, validMoves.length)];
  }

  static getWinningMoves(grid, symbol) {

  }

  static _copyGrid(grid) {

    let newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      let row = [];
      for (let j = 0; j < grid[i].length; j++) {
        row.push(grid[i][j]);
      }
      newGrid.push(row);
    }

    return newGrid;
  }

  static getSmartMove(grid, symbol) {
    // Can the opponent win?

    let oppSymbol = symbol === "X" ? "O" : "X";
    let validMoves = ComputerPlayer.getValidMoves(grid);

    for (let move of validMoves) {
      let gridCopy = ComputerPlayer._copyGrid(grid);
      gridCopy[move.row][move.col] = symbol;
      let isWinner = TTT.checkWin(gridCopy);


      if (isWinner !== false) {
        return move;
      }

      gridCopy[move.row][move.col] = oppSymbol;
      let oppWinner = TTT.checkWin(gridCopy);
      if (oppWinner !== false) {
        return move;
      }
    }
  }

}


module.exports = ComputerPlayer;
