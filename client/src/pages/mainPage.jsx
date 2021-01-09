import React, { Component, useState, useEffect } from "react";
import NavBar from "../components/navbar";
import Body from "../components/body";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";

const MainPage = (props) => {

  const searchVal = (value) => {
    Axios.post("http://192.168.0.123:3001/api/search", {
      value: value,
    });
  };

  return (
    <div className="content">
      {props.loggedin? (
        <Container>
          <NavBar
            username={props.profile.username}
            profileURL={props.profile.profileURL}
            setCardList={props.setCardList}
          ></NavBar>

          <Body cardList={props.cardList}></Body>
        </Container>
      ) : null}
    </div>
  );
};

export default MainPage;
