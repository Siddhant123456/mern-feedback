import React from "react";
import { Navbar , Nav} from "react-bootstrap";
import {Button} from '@material-ui/core';
import {Link } from 'react-router-dom';
const NavbarComp = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#343a40" }}>
        <Nav.Item>
      <Button component={Link} to="/" color  = "secondary" variant = "contained">Home</Button>
        </Nav.Item>
        <Nav.Item>
        <Button component={Link} to="/feedbacklist" color  = "primary" variant = "contained">View Feedbacks</Button>
                    
        </Nav.Item>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style = {{color : "white"}}>Your Feedback Matters</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
