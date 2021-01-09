import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateCard from "../components/createCard";
import NavBar from "../components/navbar";

const CreatePost = (props) => {
  return (
    <div className="content">
      {props.loggedin ? (
        <Container>
          <NavBar
            username={props.profile.username}
            profileURL={props.profile.profileURL}
            setCardList={props.setCardList}
          ></NavBar>

          <Row className="padding">
            <Col>
              <CreateCard profile={props.profile}></CreateCard>
            </Col>
          </Row>
        </Container>
      ) : null}
    </div>
  );
};

export default CreatePost;
