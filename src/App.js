import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Photoshop", price: "30.99" },
    { name: "Visual Studio Code", price: "9.99" },
    { name: "Adobe XD", price: "14.99" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React core concepts exercise and practices.</p>
        <Player name="Leo Messi" club="FC Barcelona" />
        <Player name="Suarez" club="Athletico Madrid" />
        <Player name="Neymar" club="Paris Saint Germain" />
        <ProductCard productDetails={products[0]} />
        <ProductCard productDetails={products[1]} />
        <ProductCard productDetails={products[2]} />
      </header>
    </div>
  );
}

function ProductCard(props) {
  const cardStyle = {
    marginTop: "20px",
    boxSizing: "border-box",
    textAlign: "left",
    padding: "20px",
    color: "#4f4f4f",
    width: "300px",
    border: "1px solid #cfcbc2",
    backgroundColor: "#d9dbdb",
    borderRadius: "10px",
  };

  const bottomCard = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
  };

  const buttonStyle = {
    width: "80px",
    backgroundColor: "#32488a",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "40px",
  };

  const { name, price } = props.productDetails;

  return (
    <div style={cardStyle} className="productCard">
      <h5>{name}</h5>
      <h3>US${price}/mo</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
        laboriosam!
      </p>
      <a href="#">See Plan & pricing details</a>
      <div style={bottomCard} className="bottom">
        <input type="checkbox" name="check" id="check" />
        <label
          style={{ fontSize: "13px", position: "relative", right: "15px" }}
          htmlFor="check"
        >
          Add Adobe Stock <br />
          Get one month free*
        </label>
        <button style={buttonStyle}>Buy Now</button>
      </div>
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
