import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import FinTechTabs from './serviceTabs/finTechTabs';
import ContactForm from "./Modal/contactForm";

const Fintech = () => {
  return (
    <section id="fintech" className="section section-lg bg-gradient-secondary section-padding background-white">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="..."
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/fintech2.png")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>FinTech & Automation</h1>
              <FinTechTabs />
              <ContactForm />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Fintech;
