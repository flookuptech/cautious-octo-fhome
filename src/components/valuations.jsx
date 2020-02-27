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
    <section id="valuations" className="section bg-white renewal-padding">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="..."
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/valuation.png")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
              </div>
              </div>
              <h3 style={{textAlign:"center", fontWeight:"bold"}}>Valuations</h3>
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
