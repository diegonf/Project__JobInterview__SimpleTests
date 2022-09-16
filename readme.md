## <p align="center">Collection of Simple Interview/Challenge Tests</p>

## Tic-Tac-Toe
The challenge: Code an algorithm that receives an array as input containing the current board of the game, with 'X' and 'O' being in the position they were played and '-' an available position, and '<>' the row separator. Returns the position for the next win, no matter 'X' or 'O', maintaining the position of the row separators.
* input: ["X","O","-","<>","-","O","-","<>","O","X","-"]
<pre>
X    O    -
-    O    -
O    X    -
</pre>
* Output expected: 2 (because 'O' wins playing in position 2).

Other examples
* Input: ["X","-","O","<>","-","-","O","<>","-","-","X"] / Output: 5
* Input: ["X","O","X","<>","-","O","O","<>","X","X","O"] / Output: 4
* ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)

## PreOrder Tree Traversal
The challenge: Code an algorithm the receives an array representing a binary tree and returns its preorder traversal with elements separated by a space.
* input:  ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "#", "#", "4", "#"]
<br> <img src="./tree-traversal/input-tree.png" height=100/>

* Output: '5 2 1 9 6 8 4'

<br> Other examples
* Input: ["4", "1", "5", "2", "#", "#", "#"] / Output: 4 1 2 5
* Input: ["2", "6", "#"] / Output: 2 6
* ![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)


## Autores
| [<img src="https://avatars.githubusercontent.com/u/97759524?v=4" width=115><br><sub>Diego Ferreira</sub>](https://github.com/diegonf) | 
| :---: |