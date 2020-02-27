import React from "react";
import { Badge, Button, Card, CardBody, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faStickyNote,
  faHome,
  faToolbox
} from "@fortawesome/free-solid-svg-icons";
import ServicesTabs from "./serviceTabs/servicesTabs";
import ContactForm from "./Modal/contactForm";
import Particles from "react-particles-js";

const Services = () => {
  return (
    <section id="services" className="section section-lg bg-gradient-secondary section-padding background-white">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="..."
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/services1.png")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faToolbox} />
              </div>
              </div>
              <h3 style={{textAlign:"center", fontWeight:"bold"}}>Services</h3>
              <ServicesTabs />
              <ContactForm/>
              <Particles/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default Services;
