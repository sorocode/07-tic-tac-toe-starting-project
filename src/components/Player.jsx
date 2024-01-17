import { useEffect, useState } from "react";

export default function Player({ initialName, playerSymbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function onClickHandler() {
    // setIsEditing(!editing)
    setIsEditing((editing) => !editing);
  }
  function onChangeHandler(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }
  let player = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    player = (
      <input
        type="text"
        required
        value={playerName}
        onChange={onChangeHandler}
      ></input>
    );
  }
  return (
    <li>
      <span className="player">
        {player}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={onClickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
