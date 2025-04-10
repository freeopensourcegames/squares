
const boardSize = 10;
const board = document.getElementById('game-board');
let currentPlayer = 'blue';
let blueScore = 0;
let greenScore = 0;
let grid = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

for (let i = 0; i < boardSize * boardSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    square.dataset.index = i;
    square.addEventListener('click', () => makeMove(square, i));
    board.appendChild(square);
}

function makeMove(square, index) {
    const x = index % boardSize;
    const y = Math.floor(index / boardSize);
    if (grid[y][x]) return;

    grid[y][x] = currentPlayer;
    square.textContent = '●';
    square.classList.add(currentPlayer);

    const pointsScored = checkForSquare(x, y);
    if (currentPlayer === 'blue') {
        blueScore += pointsScored;
        document.getElementById('blue-score').textContent = `Blue Score: ${blueScore}`;
    } else {
        greenScore += pointsScored;
        document.getElementById('green-score').textContent = `Green Score: ${greenScore}`;
    }

    currentPlayer = currentPlayer === 'blue' ? 'green' : 'blue';
    document.getElementById('current-player').textContent = `Current Player: ${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}`;
}

function checkSquare(x1, y1, x2, y2, x3, y3, x4, y4, size) {
    if (grid[y1][x1] === currentPlayer &&
        grid[y2][x2] === currentPlayer &&
        grid[y3][x3] === currentPlayer &&
        grid[y4][x4] === currentPlayer) {
        return (size + 1) * (size + 1);
    }
    return 0;
}

function checkForSquare(x, y) {
    let pointsScored = 0;

    for (let size = 1; size < boardSize; size++) {
        if (x + size < boardSize && y + size < boardSize) {
            pointsScored += checkSquare(x, y, x, y + size, x + size, y, x + size, y + size, size);
        }
        if (x - size >= 0 && y - size >= 0) {
            pointsScored += checkSquare(x, y, x, y - size, x - size, y, x - size, y - size, size);
        }
        if (x - size >= 0 && y + size < boardSize) {
            pointsScored += checkSquare(x, y, x, y + size, x - size, y, x - size, y + size, size);
        }
        if (x + size < boardSize && y - size >= 0) {
            pointsScored += checkSquare(x, y, x, y - size, x + size, y, x + size, y - size, size);
        }
    }

    return pointsScored;
}
