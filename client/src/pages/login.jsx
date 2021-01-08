import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(0);
  const [error, setError] = useState("");

  const checkExists = (user, pass) => {
    Axios.post("http://localhost:3001/api/login", {
      username: user,
      password: pass,
    }).then((response) => {
      console.log(response.data);
      if (response.data) {
        Axios.post("http://localhost:3001/api/getProfile", {
          username: user,
        }).then((responseProfile) => {
          props.setProfile(responseProfile.data[0]);
          props.setLogin(1)
          setRedirect(1);
        });
      }else {
        setError("Username or password is incorrect")
      }
    });
  };

  return (
    <Container>
      {redirect === 1 ? <Redirect to="/Home" /> : null}
      <Row className="justify-content-md-center padding">
        <Card style={{ width: "35rem" }}>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col>
                  <h2>Login</h2>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>
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
                <Col sm={2}>
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
                <Col><label className="text-danger">{error}</label></Col>
                
              </Row>
            </Card.Text>
            <Row>
              <Col sm={2}>
                <Button
                  className="btn-info"
                  onClick={() => checkExists(username, password)}
                >
                  Login
                </Button>
              </Col>
              <Col>
              
                <Link to="/CreateUser">
                  <Button className="btn-info">Create</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default LoginPage;
