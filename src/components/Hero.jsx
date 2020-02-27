import React from "react";
import { 
  Container,
  Row,
  Col,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane } from "reactstrap";
import Typing from 'react-typing-animation';

import classnames from "classnames";
import NavPills from './serviceTabs/navPills';
import Particles from './bannerAnimation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faChartLine } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/homecustom.css';

class Hero extends React.Component {
  state = {
    circledNavPills: 5
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <div className="position-relative">
            <section className="section section-lg section-hero section-shaped background-gradient"> 
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            {/* <Container className="shape-container d-flex align-items-center py-lg"> */}
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" xs="12">
                     {/* <img
                      alt="..."
                      className="img-fluid banner-img-logo"
                      src={require("assets/img/theme/Logo.png")}/> */}
                    <Typing speed="50">
                      <h5 className="header-style">
                        Your Financial Effectiveness Partner
                        </h5>
                    </Typing>
     
                    <h1 style={{color:"#000"}} className="display-3 text-white tag-line">
                      Grow With Us
                    </h1> 
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col lg="12" xs="12">
                  <NavPills />
                  </Col>
                </Row>
              </div>
            {/* </Container> */}

            {/* <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-secondary background-fill"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
