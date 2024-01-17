import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/\bGameboard";
import Log from "./components/Log";

function deriveActivePlayers(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayers(gameTurns);
  function selectSquareHandler(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayers(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={selectSquareHandler}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
