import React from "react";
import { 
    Container,
    Row,
    Col,
    Nav,
    NavItem,
  } from "reactstrap";
import {
      Link
    } from "react-scroll";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faChartLine,faHandHoldingUsd, faLaptopCode, faChalkboardTeacher, faToolbox, faHeartbeat, faUserGraduate, faSearchDollar, faUmbrella } from '@fortawesome/free-solid-svg-icons'
  import '../../assets/css/homecustom.css'
  
  class NavPills extends React.Component {
    state = {
      circledNavPills: 8
    };
    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };
    render() {
        return (
         <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
         <Container>
           <Row className="justify-content-md-center">
              <Col md="3" xs="6" lg="2" className="align-items-center">
               <a href="#">
                 <NavItem className="banner-pills">
                <Link
                    activeClass="active"
                    to="fintech"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faLaptopCode} />
                  <p className="pills-text">Fintech</p>
                </span>
               </Link>
              </NavItem>
              </a>
              </Col>
              <Col md="3" xs="6" lg="2" className="align-items-center">
              <a href="#">
                <NavItem className="banner-pills">
              <Link
                    activeClass="active"
                    to="valuations"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faHandHoldingUsd} />
                  <p className="pills-text">Valuations</p>
                </span>
               </Link>
              </NavItem>
              </a>
              </Col>
              <Col md="3" xs="6" lg="2" className="align-items-center">
              <a href="#">
              <NavItem className="banner-pills">
              <Link
                    activeClass="active"
                    to="cfo"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faChalkboardTeacher} />
                  <p className="pills-text">Virtual CFO</p>
                </span>
               </Link>
              </NavItem>
              </a>
              </Col>
              <Col md="3" xs="6" lg="2" className="align-items-center">
              <a href="#">
              <NavItem className="banner-pills">
              <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faToolbox} />
                  <p className="pills-text">Services</p>
                </span>
               </Link>
              </NavItem>
              </a>
              </Col>

        </Row>
        <Row>&nbsp;</Row>
        <Row className="justify-content-md-center">
            {/* <Col xs="6" md="3" lg="2">
            <a href="#">
            <NavItem className="banner-pills">
            <Link
                    activeClass="active"
                    to="insurance"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faHeartbeat} />
                  <p className="pills-text">Insurance</p>
                </span>
               </Link>
              </NavItem>
              </a>
            </Col> */}
            <Col xs="6" md="3" lg="2">
            <a href="#">
            <NavItem className="banner-pills">
            <Link
                    //activeClass="active"
                    to="visualization"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faChartLine} />
                  <p className="pills-text">Visualization</p>
                </span>
               </Link>
              </NavItem>
              </a>
            </Col>
            <Col xs="6" md="3" lg="2">
            <a href="#">
            <NavItem className="banner-pills">
            <Link
                    activeClass="active"
                    to="fund"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faSearchDollar} />
                  <p className="pills-text">Fund Raising</p>
                </span>
               </Link>
              </NavItem>
              </a>
            </Col>
            <Col xs="6" md="3" lg="2">
            <a href="#">
            <NavItem className="banner-pills">
            <Link
                    activeClass="active"
                    to="insurance"
                    spy={true}
                    smooth="easeInBounce"
                    duration={500}
                    offset={10}
                  >
                <span className="nav-link-icon venture-icon-pill home-banner-icons d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faUmbrella} />
                  <p className="pills-text">Other Ventures</p>
                </span>
               </Link>
              </NavItem>
              </a>
            </Col>
        </Row>
     </Container>
    </Nav>

);
}
}

export default NavPills;
