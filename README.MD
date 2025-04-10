# Squares Game

Welcome to the Squares Game! This is a simple implementation of a grid-based strategy game where two players compete to form squares on a 10x10 board.

## Game Description

Squares is a strategic game for two players (Blue and Green). Players take turns placing dots on the board aiming to form squares with their marks to score points. The objective is to form as many squares as possible to maximize your score.

## How to Play

- **Setup**: The game board is a 10x10 grid.
- **Players**: Two players take alternating turns, each placing their mark (a dot) on an empty square.
- **Objective**: Create squares (2x2, 3x3, etc.) with your marks to earn points. The size of the square determines the score — a `n x n` square scores `n * n` points.
- **Score**: The score updates automatically whenever a player successfully forms a square. Multiple squares can be formed in a single turn.
- **Winning**: The player with the highest score at the end of the game wins.

## Controls

Click on any empty square on the board to place your mark. Ensure strategic placement to maximize scoring opportunities while blocking your opponent.

## How It Works

- The game uses HTML for the structure, CSS for styling, and JavaScript for interactive logic.
- The `checkSquare` function verifies potential squares around the most recently placed mark and calculates their scores.
- The `checkForSquare` function iterates through all possible square formations around the current mark and sums the points returned from `checkSquare`.

## Installation and Setup

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/squares-game.git
   ```
2. Open the `index.html` file in a web browser to start playing.

## Contributions

Feel free to fork the repository and make improvements or extensions. Contributions are welcome!

## License

This project is licensed under the MIT License.

---

Enjoy playing Squares and may the best strategist win!
