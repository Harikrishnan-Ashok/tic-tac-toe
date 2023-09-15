import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>x's turn</h1>
      <div className="tileBox">
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
      <div className="button-container">
        <Button>Reset</Button>
      </div>
    </div>
  );
}
function Tile() {
  return <div className="Tile"></div>;
}
function Button({ children }) {
  return <button className="customButton">{children}</button>;
}
