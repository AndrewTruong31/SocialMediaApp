import React, { Component } from "react";
import NavBar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "../components/profileCard";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        {this.props.loggedin ? (
          <Container>
            <NavBar
              username={this.props.profile.username}
              profileURL={this.props.profile.profileURL}
              setCardList={this.props.setCardList}
            />
            <ProfileCard
              username={this.props.profile.username}
              profileURL={this.props.profile.profileURL}
            />
          </Container>
        ) : null}
      </div>
    );
  }
}

export default Profile;
