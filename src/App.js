import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Show User Information</h1>
      <UserInfo></UserInfo>
    </div>
  );
}

function UserInfo() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const wrapper = {
    boxSizing: "border-box",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "inline-block",
    flexWrap: "wrap",
    flex: "1 1 400px",
  };
  const displayCard = {
    color: "rgba(0,0,0,0.8)",
    // width: "400px",
    borderRadius: "20px",
    margin: "20px 10px",
    padding: "20px",
    backgroundColor: "tomato",
  };

  return (
    <div>
      {users.map((user) => {
        {
          /* console.log(user); */
        }
        return (
          <div style={wrapper}>
            <div style={displayCard}>
              <h3>
                User Name :{" "}
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
              </h3>
              <h3>Gender : {user.gender}</h3>
              <h3>
                Location : {`${user.location.city},${user.location.country}`}
              </h3>
              <h3>Email : {user.email}</h3>
              <h3>
                Id : {`${user.id.value || Math.floor(Math.random() * 1000)}`}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
