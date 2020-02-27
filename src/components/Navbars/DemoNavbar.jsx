import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faStarOfLife,
  faCoins,
  faRupeeSign,
  faPiggyBank,
  faIndustry
} from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Button,
  Container,
  Row,
  Col
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
            className="navbar-main nav-test navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img className="logo-size"
                  alt="..."
                  src={require("assets/img/theme/Logo.png")}
                /> 
                {/*<h5 className="text-white mt-1">ValueUmbrella</h5>*/}
              </NavbarBrand>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
