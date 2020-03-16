import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToolbox
} from "@fortawesome/free-solid-svg-icons";
import ServicesTabs from "./serviceTabs/servicesTabs";
import ContactForm from "./Modal/contactForm";

const Services = () => {
  return (
    <section id="services" className="section section-background-fill section-lg section-padding">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="3">
            <img
              alt="services"
              className="img-fluid service-image-styles floating"
              src={require("assets/img/theme/services2.svg")}
            />
          </Col>
          <Col className="order-md-1" md="9">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faToolbox} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Services</h1>
              <ServicesTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default Services;
