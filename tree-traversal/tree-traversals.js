// Binary Tree
// Data in an array. '#' representing black nodes.
// ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "#", "#", "4", "#"] 
//             5
//       2          6
//    1     9    .     8
//   . .   . .  . .   4 
// Program should output tree in pre order.

const preOrderTreTraversal = (input) => {
  let i = 0;
  let result = [];
  const preOrder = (input, i, result) => {
    const isNodeValid = !!input[i] && input[i] !== '#';
    if (isNodeValid) {
      result.push(input[i]);
      result = preOrder(input, i * 2 + 1, result); // call left node
      result = preOrder(input, i * 2 + 2, result);
    }
    return result;
  }

  return preOrder(input, i, result);
}

const input1 = ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "#", "#", "4", "#"];
console.log(preOrderTreTraversal(input1));
const input2 = ["4", "1", "5", "2", "#", "#", "#"];
console.log(preOrderTreTraversal(input2));
const input3 = ["2", "6", "#"];
console.log(preOrderTreTraversal(input3));