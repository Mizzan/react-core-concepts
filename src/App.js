import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React core concepts exercise and practices.</p>
        <Player name="Leo Messi" club="FC Barcelona" />
        <Player name="Suarez" club="Athletico Madrid" />
        <Player name="Neymar" club="Paris Saint Germain" />
      </header>
    </div>
  );
}

function Player(props) {
  const border = {
    border: "5px solid yellow",
    margin: "10px",
    width: "400px",
    padding: "10px",
  };
  const bgStyle = {
    fontSize: "2rem",
    color: "tomato",
    backgroundColor: "#fff",
  };
  return (
    <div className="person" style={border}>
      <h1 style={bgStyle}>Player Name: {props.name}</h1>
      <h3>Player Club: {props.club}</h3>
    </div>
  );
}
export default App;
