function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <div className="game-board">
        <button className="game-button">Top Left</button>
        <button className="game-button">Top Center</button>
        <button className="game-button">Top Right</button>
        <button className="game-button">Middle Left</button>
        <button className="game-button">Middle Center</button>
        <button className="game-button">Middle Right</button>
        <button className="game-button">Bottom Left</button>
        <button className="game-button">Bottom Center</button>
        <button className="game-button">Bottom Right</button>
      </div>
    </div>
  );
}

export default App;