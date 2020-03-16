import React from "react";
import { Container,
   Row,
   Col
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faChalkboardTeacher
  } from "@fortawesome/free-solid-svg-icons";
  import '../assets/css/homecustom.css';
import CfoTabs from "./serviceTabs/cfoTabs";
import ContactForm from "./Modal/contactForm";

  class VirtualCfo extends React.Component {
    state = {
      tabs: 1
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
   <section id="cfo" className="section section-lg section-padding background-white">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="cfo"
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/cfo2.svg")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Virtual CFO</h1>
              <CfoTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    
  </>
  );
}
  }

export default VirtualCfo;
