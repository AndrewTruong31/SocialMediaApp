import React, { Component } from "react";

class user extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.username}</h1>
        <img src={this.props.profileURL} className="navleft profile" />
      </React.Fragment>
    );
  }
}

export default user;
