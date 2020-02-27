import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGrinBeam } from "@fortawesome/free-solid-svg-icons";

const RatingsBar = () => {
  return (
    <section className="section p-1 bg-danger">
      {/* <Container>
        <Row className="row-grid align-items-center p-2">
          <Col md="6">
            <div className="d-flex ml-4">
              <div className="icon icon-lg icon-shape bg-white shadow rounded-circle text-warning">
                <FontAwesomeIcon icon={faGrinBeam} />
              </div>
              <h5 className="display-5 text-white mt-3 ml-2">
                Trusted by all for their insurance needs
              </h5>
            </div>
          </Col>
          <Col md="3">
            <div className="d-flex px-3">
              <div className="icon icon-md icon-shape bg-white shadow rounded-circle text-primary">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div>
                <img
                  className="ml-2 mt-2"
                  alt="..."
                  src={require("assets/img/Star.svg")}
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-md icon-shape bg-white shadow rounded-circle text-warning">
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
              </div>
              <div>
                <img
                  className="mt-2 ml-2"
                  alt="..."
                  src={require("assets/img/Star.svg")}
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
};

export default RatingsBar;
