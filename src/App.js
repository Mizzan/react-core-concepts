import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React core concepts exercise and practices.</p>
        <Counter />
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrease}> Increase </button>
      <br />
      <button onClick={handleDecrease}> Decrease </button>
    </div>
  );
}

export default App;
