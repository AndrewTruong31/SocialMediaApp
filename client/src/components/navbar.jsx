import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios"

const CustomNavbar = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [redirect, setRedirect] = useState(0);
  
  const searchDB = (search) => {
    Axios.post("http://192.168.0.123:3001/api/search", {
      search:search,
    }).then((response) => { 
      props.setCardList(response.data)
    })
  }

  const reset = () => {
    Axios.get("http://192.168.0.123:3001/api/getCard").then(
        (responseCards) => {
          props.setCardList(responseCards.data);
        }
      );
  }

  return (
    <Navbar className="bg-light justify-content-between">
      {redirect === 1 ? <Redirect to="/" /> : null}
      {redirect === 2 ? <Redirect to="/Profile" /> : null}
      <Form inline>
        <Link to="/Home"><img className="logo" src="../../logo.png" onClick={reset}/></Link>
      </Form>
      <Form inline>
        <Link to="/CreatePost">
          <Button className="mr-sm-5 btn-info">Create</Button>
        </Link>
        <FormControl
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <Button onClick={() => searchDB(searchVal)}>Search</Button>
        <NavDropdown title={props.username} id="collasible-nav-dropdown">
          <NavDropdown.Item onClick={() => setRedirect(2)}>Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">filler</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setRedirect(1)}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Form>
    </Navbar>
  );
};

export default CustomNavbar;
