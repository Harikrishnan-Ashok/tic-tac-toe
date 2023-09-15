import "./App.css";
import { useState } from "react";

export default function App() {
  const arr = [
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
    { id: 9, value: null },
  ];
  const [turn, setTurn] = useState("x");
  return (
    <>
      <div className="app-container">
        <h1 style={{ color: "white" }}>TIC-TAC-TOE</h1>
        <h1>{turn}'s turn</h1>
        <div className="tileBox">
          {arr.map((el) => (
            <Tile currTile={el} turn={turn} setturn={setTurn}></Tile>
          ))}
        </div>
        <div className="button-container">
          <Button>Reset</Button>
        </div>
      </div>
    </>
  );
}
function Tile({ currTile, turn, setturn }) {
  const [tileState, setTileState] = useState("");
  function xplay() {
    setTileState("❌");
    setturn("o");
  }
  function oplay() {
    setTileState("⭕");
    setturn("x");
  }
  function handleonClick() {
    tileState === "" && (turn === "x" ? xplay() : oplay());
  }
  return (
    <div className="Tile" onClick={handleonClick}>
      {tileState}
    </div>
  );
}
function Button({ children }) {
  return <button className="customButton">{children}</button>;
}
