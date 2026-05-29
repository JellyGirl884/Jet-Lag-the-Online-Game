let turn = 1;

const board = document.getElementById("board");
const turnText = document.getElementById("turnText");

for (let i = 0; i < 16; i++) {

  const cell = document.createElement("div");
  cell.className = "cell";

  cell.onclick = function () {

    if (cell.style.background !== "") return;

    if (turn === 1) {
      cell.style.background = "red";
      turn = 2;
      turnText.innerText = "Player 2's turn";
    }

    else {
      cell.style.background = "blue";
      turn = 1;
      turnText.innerText = "Player 1's turn";
    }
  };

  board.appendChild(cell);
}
