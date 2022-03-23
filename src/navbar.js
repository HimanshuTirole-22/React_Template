import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo1 from './assests/4.jpg';

function navbar() {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">
          <img
            src={logo1}
            width="100"
            height="100"
            // className="d-inline-block align-top"
            alt="Logo"
          />
        </ReactBootStrap.Navbar.Brand>


        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">

            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}

            <ReactBootStrap.Nav.Link href="#PublicPost">Public Post</ReactBootStrap.Nav.Link>

            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}
            {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}

            <ReactBootStrap.Nav.Link href="#YourPost">Your Post</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav>

            <ReactBootStrap.Navbar.Brand href="#home">
              <img
                src={logo1}
                width="30"
                height="30"
                // className="d-inline-block align-top"
                alt="Name"
              />
            </ReactBootStrap.Navbar.Brand>

            <ReactBootStrap.Nav.Link href="#SignUp">Sign Up</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
            {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}
            <ReactBootStrap.Nav.Link href="#Login">
              Login
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  )
}
export default navbar;