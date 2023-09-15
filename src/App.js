import { useState } from "react";
import "./App.css";

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [turn, setTurn] = useState("");
  function handleReset() {
    setTurn("");
  }
  return (
    <div className="app-container">
      <h1>x's turn</h1>
      <div className="tileBox">
        {arr.map((el) => (
          <Tile key={el}>{turn}</Tile>
        ))}
      </div>
      <div className="button-container">
        <Button onhandleReset={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
function Tile({ children }) {
  return <div className="Tile">{children}</div>;
}
function Button({ children, onhandleReset }) {
  return (
    <button className="customButton" onClick={onhandleReset}>
      {children}
    </button>
  );
}
