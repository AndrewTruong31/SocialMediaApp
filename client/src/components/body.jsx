import React, { Component } from "react";
import Card from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";

class Body extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        {this.props.cardList
          ? this.props.cardList.reverse().map((val) => {
              return (
                <Row className="justify-content-md-center padding">
                  <Col md="auto">
                    <Card
                      key={val.id}
                      src={val.imageURL}
                      cardTitle={val.user}
                      cardDesc={val.description}
                    ></Card>
                  </Col>
                </Row>
              );
            })
          : null}
      </React.Fragment>
    );
  }
}

export default Body;
