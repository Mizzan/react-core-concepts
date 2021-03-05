// import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import MediaCard from "./components/CardNews/CardNews";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ecd781a4f8f0456abf023a72e84a444c";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <>
      <MediaCard articles={articles}></MediaCard>
    </>
  );
}

export default App;
