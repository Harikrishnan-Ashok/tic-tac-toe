import React, { useState } from "react";
import "./App.css";

export default function App() {
  const initialArr = [
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

  const [arr, setArr] = useState(initialArr);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (id) => {
    if (winner || arr[id - 1]?.value) return;

    const newArr = [...arr];
    newArr[id - 1] = { ...newArr[id - 1], value: turn };
    setArr(newArr);

    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);

    const result = calculateWinner(newArr.map((tile) => tile.value));
    if (result) {
      setWinner(result);
    }
  };

  const resetGame = () => {
    setArr(initialArr);
    setTurn("X");
    setWinner(null);
  };

  return (
    <div className="app-container">
      <h1 style={{ color: "white" }}>TIC-TAC-TOE</h1>
      <h1>{winner ? `Winner: ${winner}` : `${turn}'s turn`}</h1>
      <div className="tileBox">
        {arr.map((el) => (
          <Tile
            key={el.id}
            currTile={el}
            onClick={() => handleClick(el.id)}
          ></Tile>
        ))}
      </div>
      <div className="button-container">
        <Button onClick={resetGame}>Reset</Button>
      </div>
    </div>
  );
}

function Tile({ currTile, onClick }) {
  return (
    <div className="Tile" onClick={onClick}>
      {currTile.value}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="customButton" onClick={onClick}>
      {children}
    </button>
  );
}
