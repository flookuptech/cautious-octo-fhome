import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../../assets/css/homecustom.css";

const links = [
  { href: "http://localhost:3000/network", text: "Network" },
  {
    href: "http://localhost:3000/pincodeDistanceCalculator",
    text: "Pincode Distance Calculator",
  },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink
      href={href}
      className={className}
      style={{ color: "rgba(47, 55, 80, 0.8)", fontWeight: "bold" }}
    >
      {text}
    </NavLink>
  </NavItem>
);

export default class DemoNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <>
        <header className="header-global">
          <div>
            <Navbar
              color="light"
              expand="lg"
              id="navbar-main"
              className="navbar-main nav-align custom-toggler navbar-transparent headroom"
            >
              <NavbarBrand href="/">
                <img
                  className="logo-size"
                  alt="flookup"
                  src={require("assets/img/theme/logo-01.png")}
                />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {links.map(createNavItem)}
                </Nav>
              </Collapse>
            </Navbar>
            <br />
          </div>
        </header>
      </>
    );
  }
}
