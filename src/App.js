import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React core concepts exercise and practices.</p>
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies : {count}</h3>
    </div>
  );
}

export default App;
