import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../assets/css/homecustom.css';


const whatsAppBar = () => {
  return (
    <section className="section p-3 bg-gradient-info">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-1" lg="10">
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-success shadow rounded-circle text-white">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </div>
              <div className="pl-4 pt-2">
                <h3 className="display-5 text-white whatsapp-section">
                  For enquiry; connect on
                  <a
                    href="//api.whatsapp.com/send?phone=917059010203&text=I'm interested"
                    title="Connect on whatsapp"
                    className="pl-2 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>+91-7059010203</u>
                  </a>
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default whatsAppBar;
