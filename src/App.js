import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import News from "./components/News/News";

function handleError(err) {
  return console.log("Oh Noooo", err);
}

function App() {
  const apiKey = "ecd781a4f8f0456abf023a72e84a444c";
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((newsData) => setNews(newsData.articles))
      .catch(handleError);
  }, []);
  return (
    <div className="container">
      <h1>Newspaper</h1>
      <div className="row">
        <div className="col">
          <News news={news}></News>
        </div>
      </div>
    </div>
  );
}

export default App;
