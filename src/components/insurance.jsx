import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faUmbrella
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import InsuranceTabs from "./serviceTabs/insuranceTabs";
import ContactForm from "./Modal/contactForm";
import BackgroundWave from "./backgroundWave";

const Insurance = () => {
  return (
    <section id="insurance" className="section section-lg fund-section section-padding background-white">
        
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="insurance"
              className="img-fluid insurance-img floating"
              src={require("assets/img/theme/ventures.svg")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faUmbrella} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Other Ventures</h1>
              <InsuranceTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
      <BackgroundWave/>
    </section>
  );
};

export default Insurance;
