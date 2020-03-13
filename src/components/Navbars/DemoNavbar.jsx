import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  NavbarBrand,
  Navbar
} from "reactstrap";
import '../../assets/css/homecustom.css'

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main nav-align navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img className="logo-size"
                  alt="..."
                  src={require("assets/img/theme/logo-01.png")}
                /> 
                {/*<h5 className="text-white mt-1">ValueUmbrella</h5>*/}
              </NavbarBrand>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
