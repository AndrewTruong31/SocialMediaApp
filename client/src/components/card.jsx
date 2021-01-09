import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

class customCard extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "35rem" }}>
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>
            <label>{this.props.cardTitle}</label>
            
          </Card.Title>
          
          <Card.Text>{this.props.cardDesc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default customCard;
