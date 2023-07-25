const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");

describe ('Bejeweled', function () {

  // Add tests for setting up a basic board
  let bejeweled;

  beforeEach(() => {
    bejeweled = new Bejeweled();

  });


  it('should setup an empty grid', function() {

     expect(bejeweled.grid.length).to.equal(8);

     for (let subgrid of bejeweled.grid) {
      expect(subgrid.length).to.equal(8);
     }

  });

  it('should setup a basic board', function() {

    bejeweled.fillBoard();

    for (let subgrid of bejeweled.grid) {
      subgrid.some((ele) => ele !== " ");
     }

 });


 it('should return false if there no matches', function() {
  let grid = [
    ['🍊', '🍊', '🍋', '🍋', '🍓', '🍇', '🥥', '🥥'],
    ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
    ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🍓', '🥝'],
    ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
    ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
    ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
    ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
    ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
  ]

  let isMatch = Bejeweled.checkForMatches(grid);

  expect(isMatch).to.equal(false);

});

  it('should return true if there is 3 in a row horizontally', function() {
    let grid2 = [
      ['🍊', '🍊', '🍊', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🍓', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    let isMatch = Bejeweled._checkHorizontals(grid2);

    expect(isMatch).to.not.equal(null);

  });

  it('should return true if there is 3 in a row vertically', function() {
    let grid = [
      ['🍊', '🍊', '🍓', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🥝', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    let isMatch = Bejeweled.checkForMatches(grid);

    expect(isMatch).to.not.equal(false);

  });

  it('should remove the matches and replace with an empty spot', function() {

    let beforeHor = [
      ['🍊', '🍊', '🍊', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🍓', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    let afterHor = [
      [' ', ' ', ' ', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🍓', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    let beforeVert =  [
      ['🍊', '🍊', '🍓', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🥝', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ];

    let afterVert =  [
      ['🍊', '🍊', '🍓', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', ' ', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', ' ', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', ' ', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ];


    bejeweled.grid = beforeHor;
    let obj = {type: "row", pos: {row: 0, col: 0}};
    bejeweled._removeMatchesGivenStartPos(obj);

    let gridsEqual = JSON.stringify(bejeweled.grid) === JSON.stringify(afterHor);

    expect(gridsEqual).to.equal(true);

    bejeweled.grid = beforeVert;
    let obj2 = {type: "col", pos: {row: 2, col: 6}}
    bejeweled._removeMatchesGivenStartPos(obj2);

    let gridsEqual2 = JSON.stringify(bejeweled.grid) === JSON.stringify(afterVert);

    expect(gridsEqual2).to.equal(true);
  });

  it('should fill in the removed matched elements with random choices at the top row', function() {
    let grid = [
      [' ', ' ', ' ', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🥝', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🥝', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    let clone = JSON.parse(JSON.stringify(grid));
    bejeweled.grid = clone;

    bejeweled.populateEmptyRows();


    expect(JSON.stringify(bejeweled.grid)).to.not.equal(JSON.stringify(grid));

  });

  it('should drop elements from above to fill the empty spots in matches', function() {
    let grid = [
      ['🍊', '🍊', '🍓', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', ' ', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', ' ', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', ' ', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    bejeweled.grid = grid;

    bejeweled.populateEmptyRows();
    console.log(bejeweled.grid);
    expect(bejeweled.grid[3][6]).to.equal('🥥');
    expect(bejeweled.grid[4][6]).to.equal('🍓');
  });
  // Add tests for a valid swap that matches 3

  it('should allow you to combo swaps', function() {
    let grid = [
      ['🍊', '🍊', '🍓', '🍋', '🍓', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🍊', '🥥', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🥥', '🥝', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🥥', '🥝', '🍓'],
      ['🥥', '🥝', '🥥', '🥥', '🍇', '🍊', '🍋', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍊', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🍓', '🍊', '🍊', '🥝'],
      ['🍓', '🍊', '🥝', '🍊', '🍊', '🥝', '🥥', '🍋']
    ]

    bejeweled.grid = grid;

    bejeweled.cursor.selected = [1, 2];
    bejeweled.cursor.row = 2;
    bejeweled.cursor.col = 2;

    bejeweled.cursor.swap();

  });
  // Add tests for swaps that set up combos

  it('should check if there are no possible valid moves', function() {
    ["🍊", "🍇", "🥝", "🥥", "🍓", "🍋"];
    let grid = [
      ['🍊', '🍊', '🍓', '🍋', '🍇', '🍇', '🥥', '🥥'],
      ['🥥', '🍊', '🥝', '🥝', '🥥', '🍓', '🍓', '🍊'],
      ['🍇', '🍋', '🥥', '🍊', '🥥', '🍋', '🥝', '🥝'],
      ['🍊', '🥥', '🍊', '🍊', '🍇', '🍓', '🥝', '🍓'],
      ['🥥', '🥝', '🍋', '🥥', '🍇', '🍊', '🍋', '🍊'],
      ['🍋', '🥝', '🥝', '🥥', '🥥', '🍋', '🍋', '🍊'],
      ['🍋', '🍓', '🍓', '🍊', '🥝', '🍊', '🍓', '🥝'],
      ['🍊', '🍓', '🥝', '🍊', '🍓', '🥝', '🥥', '🍋']
    ];

    let validMoves = Bejeweled.anyValidMoves(grid);
    expect(validMoves).to.equal(false);
  });
  // Add tests to check if there are no possible valid moves

});
