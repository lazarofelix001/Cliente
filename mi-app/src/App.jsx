import './App.css'
import { useState } from 'react';
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue(`X`)
  };
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function App() {

const [Eleccion, setValue] = useState(null)

  return (
    <>
      <div className="board-row">
        <p>Elegiste: {Eleccion}</p>
        <button onClick={() =>setValue(`Piedra`)}>✊</button>
        <button onClick={() =>setValue(`Papel`)}>✋</button>
        <button onClick={() =>setValue(`Tijera`)}>✌️</button>
      </div>
    </>
  );
}