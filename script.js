let turn = 1;
let gameOver = false;

const board = document.getElementById("board");
const turnText = document.getElementById("turnText");

let boardState = Array(16).fill(0);

// create grid
for (let i = 0; i < 16; i++) {

  const cell = document.createElement("div");
  cell.className = "cell";

  cell.onclick = function () {
    if (gameOver) return;
    if (boardState[i] !== 0) return;

    // update state
    boardState[i] = turn;

    // update UI
    if (turn === 1) {
      cell.style.background = "red";
      turn = 2;
      turnText.innerText = "Player 2's turn";
    } else {
      cell.style.background = "blue";
      turn = 1;
      turnText.innerText = "Player 1's turn";
    }

    // check win after move
    if (checkWin(1)) {
      turnText.innerText = "Player 1 wins!";
      gameOver = true;
    }

    if (checkWin(2)) {
      turnText.innerText = "Player 2 wins!";
      gameOver = true;
    }
  };

  board.appendChild(cell);
}

// win logic
function checkWin(player) {

  const wins = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],

    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15]
  ];

  return wins.some(line =>
    line.every(index => boardState[index] === player)
  );
}
