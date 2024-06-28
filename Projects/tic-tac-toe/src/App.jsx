import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import { useState } from 'react';
import GameOver from './components/GameOver.jsx';
import { winningCombinations } from './components/WinningCombo.js';

const gamePlayers = {
  X: 'Player 1',
  O: 'Player 2'
}

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function determineCurrentPlayer(turns) {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function createGameBoard(turns){
  let board = [...initialBoard.map(array => [...array])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }

  return board;
}

function determineWinner(board, players){
  let winner;

  for (const combination of winningCombinations) {
    const firstSquareSymbol = board[combination[0].row][combination[0].column];
    const secondSquareSymbol = board[combination[1].row][combination[1].column];
    const thirdSquareSymbol = board[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) 
      {
      winner = players[firstSquareSymbol];
    }

    
  }
  return winner;
}



function App() {

  const [playerNames, setPlayerNames] = useState(gamePlayers)

  const [gameHistory, setGameHistory] = useState([]);

  const currentPlayer = determineCurrentPlayer(gameHistory);


  const gameBoard = createGameBoard(gameHistory);
  const winner = determineWinner(gameBoard, playerNames);
  let isDraw = gameHistory.length === 9 && !winner;



  function handleSquareSelection(rowIndex, colIndex) {
    setGameHistory((prevTurns) => {
      let currentPlayer = determineCurrentPlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameHistory([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayerNames(prevPlayers => {
      return {
        ...prevPlayers, 
        [symbol]: newName
      };
    });
  }

  return (
    <div id="root">
      <div id="game-container" >
        <ol id="players" className='highlight-player'>
          <Player 
          initialName={gamePlayers.X} 
          symbol="X" 
          isActive={currentPlayer === "X"}
          onChangeName={handlePlayerNameChange} 
          />
          <Player 
          initialName={gamePlayers.O} 
          symbol="O" 
          isActive={currentPlayer === "O"}
          onChangeName={handlePlayerNameChange} 
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard
          onSelectSquare={handleSquareSelection}
          board={gameBoard} />
      </div>
    </div>
  )
}


export default App;