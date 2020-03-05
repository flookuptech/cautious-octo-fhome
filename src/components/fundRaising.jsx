import React from "react";
import { Container, Col, Row, Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faSearchDollar
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import FundTabs from "./serviceTabs/fundTabs";
import ContactForm from "./Modal/contactForm";

const FundRaising = () => {
  return (
    <section id="fund" className="section section-lg bg-gradient-secondary section-padding background-white">
        
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="..."
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/fund.png")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faSearchDollar} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Fund Raising</h1>
              <FundTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FundRaising;
