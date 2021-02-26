import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React core concepts exercise and practices.</p>
        <DynamicUsers />
      </header>
    </div>
  );
}

function DynamicUsers() {
  const [users, setUsers] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // useEffect keeps running for stopping after certain work
    // add the objects or what would be added in the end brackets.
  }, []);

  return (
    <div>
      <h4>Dynamic Users : {users.length}</h4>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
