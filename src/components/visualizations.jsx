import React from "react";
import { Container, Col, Row, Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faChartLine
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import VisTabs from "./serviceTabs/visTabs";
import ContactForm from "./Modal/contactForm";

const Visualizations = () => {
  return (
    <section id="visualization" className="section section-lg bg-gradient-secondary section-padding background-white">
        
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="..."
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/Data_green.png")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              </div>
              <h3 style={{textAlign:"center", fontWeight:"bold"}}>Visualizations</h3>
              <VisTabs/>
              <ContactForm />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Visualizations;
