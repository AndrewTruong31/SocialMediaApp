import React, { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  return (
    <div className="content cardlayout padding">
      <Card style={{ width: "35rem" }}>
        <Card.Header>
          Profile Picture:
          <Card.Img className="padding" variant="top" src={props.profileURL} />
        </Card.Header>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Username: {props.username}</Card.Title>
          <Card.Text>temp</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
