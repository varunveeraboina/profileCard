
import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './navbar.css';


class Navbars extends React.Component{
  
  render(){ 
        return(
      <div className="navbar">
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Profile</Navbar.Brand>
        <div className="nav-button">
        <button  type="button">page 1</button>
        <button type="button">page 2</button>
        </div>
        </Navbar>
      </div>
    );
  }
}
  export default Navbars;