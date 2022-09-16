// Tic Tac Toe - Test
// The software should receive an input like ['-', 'O', 'X','<>','O', '-', 'X','<>','-', '-', '-']
// being '<>' the rows separetor. 
// And the the software should return the position in the array of the input of the next move to win the game (playing X o O).
// In the input example above, it should be play X at position 10.

const ticTacToeTest = (input) => {

  const inputMatrix = [
    [input[0], input[1], input[2]],
    [input[4], input[5], input[6]],
    [input[8], input[9], input[10]]
  ]

  const onePlayToWin = (a, b, c, arrayIndex) => {
    let xPlay = 0, oPlay = 0, emptySpaces = 0;
    let indexEmptySpace = [];

    let plays = [a, b, c];
    plays.forEach((play, index) => {
      if (play === '-') {
        emptySpaces++
        indexEmptySpace.push(index);
      }
      if (play === 'X') xPlay++
      if (play === 'O') oPlay++;
    })

    if (emptySpaces === 1 && xPlay === 2) return ['X', arrayIndex[indexEmptySpace[0]]];
    if (emptySpaces === 1 && oPlay === 2) return ['O', arrayIndex[indexEmptySpace[0]]];
    return false;
  }

  const finalResult = () => {
    // Diagonals
    let diag1Input = [input[0], input[5], input[10]];
    let diag2Input = [input[8], input[5], input[2]];
    const diag1Result = onePlayToWin(...diag1Input, [0, 5, 10]);
    const diag2Result = onePlayToWin(...diag2Input, [8, 5, 2]);

    if (diag1Result) {
      return [diag1Result[0], diag1Result[1]];
    };
    if (diag2Result) {
      return [diag2Result[0], diag2Result[1]];
    };

    // Rows and Columns
    for (var i = 0; i < inputMatrix.length; i++) {
      let rowInput = [], colInput = [];
      for (var j = 0; j < inputMatrix.length; j++) {
        rowInput.push(inputMatrix[i][j]);
        colInput.push(inputMatrix[j][i])
      }
      const rowResult = onePlayToWin(...rowInput, [0, 1, 2]);
      const colResult = onePlayToWin(...colInput, [0, 1, 2] );
      let rowIndex, colIndex;
      if (i === 0) { rowIndex = rowResult[1] + 0; colIndex = colResult[1] * 4 + 0; }
      if (i === 1) { rowIndex = rowResult[1] + 4; colIndex = colResult[1] * 4 + 1; }
      if (i === 2) { rowIndex = rowResult[1] + 8; colIndex = colResult[1] * 4 + 2; }

      if (rowResult) return [rowResult[0], rowIndex];
      if (colResult) return [colResult[0], colIndex];
    }
  }

  const result = finalResult();
  if (!result) {
    // console.log('no match!');
    return;
  }
  // console.log('To win play ', result[0], ' at position ', result[1]);
  return Number(result[1]);
}

const input = ["X","O","-","<>","-","O","-","<>","O","X","-"];
console.log(ticTacToeTest(input));
const input2 = ["X","-","O","<>","-","-","O","<>","-","-","X"];
console.log(ticTacToeTest(input2));
const input3 = ["X","O","X","<>","-","O","O","<>","X","X","O"];
console.log(ticTacToeTest(input3));







