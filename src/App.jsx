import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/\bGameboard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function selectSquareHandler() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
          onSelectSqure={selectSquareHandler}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
