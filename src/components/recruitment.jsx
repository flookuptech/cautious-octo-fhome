import React from "react";
import {Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import '../assets/css/homecustom.css';
import RecruitmentTabs from "./serviceTabs/recruitmentTabs";
import ContactForm from "./Modal/contactForm";
import BackgroundWave from "./backgroundWave";

const Recruitment = () => {
  return (
    <section id="recruitment" className="section section-background-fill fund-section section-lg section-padding">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="4">
            <img
              alt="recruitment"
              className="img-fluid section-image-styles floating"
              src={require("assets/img/theme/career2.svg")}
            />
          </Col>
          <Col className="order-md-1" md="8">
            <div className="pr-md-5 align-mobile">
              <div className="icon-align">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              </div>
              <h1 style={{textAlign:"center", fontWeight:"bold"}}>Recruitment</h1>
              <RecruitmentTabs />
              <ContactForm/>
              </div>
          </Col>
        </Row>
      </Container>
      <BackgroundWave/>
    </section>
  );
};

export default Recruitment;
