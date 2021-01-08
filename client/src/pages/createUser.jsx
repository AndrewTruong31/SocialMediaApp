import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const CreateUser = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const [redirect, setRedirect] = useState(0);
  const [error, setError] = useState("");

  const checkCreds = (user, pass, confirm, URL) => {
    if (pass === confirm) {
      if (pass.length > 3) {
        if (URL.length === 0) {
          URL = "https://i.picsum.photos/id/407/200/200.jpg?hmac=PV4bwPN59Y3_R4kbqnn8kxRsVzwUMQZn3BMu85CUPlA"
        }
        Axios.post("http://localhost:3001/api/createUser", {
          username: user,
          password: pass,
          profileURL: URL,
        }).then((response) => {
          console.log(response.data);

          const value = response.data.value;

          if (value === 1) {
            setRedirect(1);
          } else if (value === -1) {
            setError("Username is taken");
          }
        });
      } else {
        setError("Password must be more than 3 characters");
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <Container>
      {redirect === 1 ? <Redirect to="/" /> : null}
      <Row className="justify-content-md-center padding">
        <Card style={{ width: "35rem" }}>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col>
                  <h2>Create Account</h2>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <label>Username: </label>
                </Col>
                <Col>
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <label>Password: </label>
                </Col>
                <Col>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <label>Confirm Password: </label>
                </Col>
                <Col>
                  <input
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <label>Profile Picture (URL): </label>
                </Col>
                <Col>
                  <input
                    onChange={(e) => {
                      setProfileURL(e.target.value);
                    }}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="text-danger">{error}</label>
                </Col>
              </Row>
            </Card.Text>
            <Row>
              <Col>
                <Button
                  className="btn-info"
                  onClick={() =>
                    checkCreds(username, password, confirmPassword, profileURL)
                  }
                >
                  Create
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CreateUser;
