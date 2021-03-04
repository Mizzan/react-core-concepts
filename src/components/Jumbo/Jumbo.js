import React from "react";
// import { Jumbotron, Button } from "react-bootstrap";

const Jumbo = ({ news }) => {
  const { source, author, title, description, content } = news;
  return (
    <div className="articles">
      {news.map(() => (
        <>
          <h1>{title}</h1>
          <h3>{author}</h3>
          <h5>{source}</h5>
          <p>{description}</p>
          <p>{content}</p>
        </>
      ))}
    </div>
  );
};

export default Jumbo;
