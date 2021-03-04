import React from "react";
import { Card, Button } from "react-bootstrap";
import "./News.css";
const News = ({ news }) => {
  return (
    <div className="articles">
      {news.map((item) => {
        return (
          <div key={item.source.id} className="single-article mb-4">
            <Card>
              <Card.Header className="text-danger" as="h5">
                {item.source.name}
              </Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={item.urlToImage} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.content}</Card.Text>
                <Button variant="primary">Read More..</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default News;
