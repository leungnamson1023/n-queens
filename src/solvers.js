/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {

  var board = new Board({n: n}); //fixme

  // console.log(solution.rows()[0]);



  // n = 3

  var findSolution = function(row) {
    // start at row 0, if startrow is equal to row, return the board
    // loop through the board, add a rook at initial position
    // if there is no rook conflict(row or col), toggle a piece at that location
    // recurse by passing in the board, startRow + 1, and row?

  // for (var i = 0; i < solution.rows().length; i++) {
  //   for (var j = 0; j < solution.rows().length; j++) {
  //     if (solution.rows()[i].window.hasRowConflictAt(i) && solution.rows()[i].hasColConflictAt(i)) {
  //       solution.rows()[i].togglePiece(i, j);
  //     }
  //   }
  //}
    row = row || 0; // this defines row
    
    if (n === row) { // if size of board is equal to row or 0, return the board
      return board.rows();
    } else {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyRooksConflicts()) {
          return findSolution(row + 1);
        }
        board.togglePiece(row, col);
      }
    }
  };

  var solution = findSolution();


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

// Start a count at 0 
// create a new board if the board is 0

// 
// 
// 
// 
// 
// 
// 
// 
// 
  var solutionCount = 0;
  var board = new Board({n: n});

  var countSolution = function(row) {

    row = row || 0; // this defines row
    if (n === row) { 
      solutionCount++;
    } else {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasColConflictAt(col)) {
          countSolution(row + 1);
        }
        board.togglePiece(row, col);
      }
    }
  };
  
  countSolution();
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
