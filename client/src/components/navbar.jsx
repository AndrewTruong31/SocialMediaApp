import React, { Component } from "react";
import User from "./user"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom"

class customNavbar extends Component {
  state = {
    searchVal: "",
  };

  updateSearch = (input) => {
    this.setState({ searchVal: input });
  };

  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <User username={this.props.username} profileURL={this.props.profileURL}></User>
        </Form>
        <Form inline>
          <Link to="/CreatePost"><Button className="mr-sm-5 btn-info">Create</Button></Link>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button>Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default customNavbar;
