import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import InsuranceTabs from "./serviceTabs/insuranceTabs";
import ContactForm from "./Modal/contactForm";

const Insurance = () => {
  return (
    <section id="insurance" className="section section-lg bg-gradient-secondary section-padding background-white">
        
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="..."
              className="img-fluid section-image-styles insurance-img floating"
              src={require("assets/img/theme/insurance_green.png")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faHeartbeat} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Insurance</h1>
              <InsuranceTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Insurance;
