import React from "react";
import { Container, Col, Row } from "reactstrap";
import ValuationTabs from './serviceTabs/valuationTabs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHandHoldingUsd
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import ContactForm from "./Modal/contactForm";

const Valuations = () => {
  return (
    <section id="valuations" className="section section-background-fill section-lg section-padding">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="valuation"
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/valuation-new.svg")}
              
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Valuations</h1>
              <ValuationTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Valuations;
