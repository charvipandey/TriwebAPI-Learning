import React, { useState } from 'react';

// import statements components (game board, game over, player)


const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <div className="game-board">
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div key={colIndex}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;