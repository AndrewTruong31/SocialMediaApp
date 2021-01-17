import React, { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

const CreateCard = (props) => {
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const createPost = (imageURL, username, description) => {
    Axios.post("http://192.168.0.123:3001/api/createPost", {
      user: username,
      imageURL: imageURL,
      description: description,
    });
  };

  return (
    <div className="content cardlayout">
      <Card style={{ width: "35rem" }}>
        <Card.Header>
          <label>Enter an Image URL: </label>
          <br />
          <input
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
          />
          <Card.Img className="padding" variant="top" src={imageURL} />
        </Card.Header>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Username: {props.profile.username}</Card.Title>
          <Card.Text>
            <label>Enter a Description: </label>
            <br />
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Link to="/Home">
        <Button
          onClick={() =>
            createPost(imageURL, props.profile.username, description)
          }
          className=""
        >
          Submit
        </Button>
      </Link>
    </div>
  );
};

export default CreateCard;
