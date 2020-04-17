import React from "react";
import { 
  Row,
  Col,
  } from "reactstrap";
import Typing from 'react-typing-animation';

import NavPills from './serviceTabs/navPills';

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
              <span className="span-150 animate-bg" />
              <span className="span-50 animate-bg" />
              <span className="span-50 animate-bg" />
              <span className="span-75 animate-bg" />
              <span className="span-100 animate-bg" />
              <span className="span-75 animate-bg" />
              <span className="span-50 animate-bg" />
              <span className="span-100 animate-bg" />
              <span className="span-50 animate-bg" />
              <span className="span-100 animate-bg" />
            </div>
            {/* <Container className="shape-container d-flex align-items-center py-lg"> */}
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" xs="12">
                     {/* <img
                      alt="..."
                      className="img-fluid banner-img-logo"
                      src={require("assets/img/theme/Logo.png")}/> */}
                    <Typing speed="500">
                      <h5 className="header-style" style={{color:"#469a34"}}>
                        Finance,<span style={{color:"#fff"}}> driven by Technology</span>
                        </h5>
                      </Typing>
     
                    <h1 className="display-3 text-white tag-line">
                      Grow With Us
                    </h1> 
                  </Col>
                </Row>
                <Row className="justify-content-md-center home-section">
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
