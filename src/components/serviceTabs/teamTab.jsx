import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TeamTab extends React.Component {
  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <Row>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Vaibhav.jpg")}
                          />
                          <p className="team-name">
                              Vaibhav Mandhana
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Neha.jpg")}
                          />
                          <p className="team-name">
                              Neha Jain
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Akash.jpg")}
                          />
                          <p className="team-name">
                              Akash Agarwal
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Antim.jpg")}
                          />
                          <p className="team-name">
                              Antim Patni
                          </p>
                      </div>
                      </div>
                    </Col>
                </Row>
                <Row>
                <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Rasesh.jpg")}
                          />
                          <p className="team-name">
                              Rasesh Seth
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Sujata.jpg")}
                          />
                          <p className="team-name">
                          Sujata Behani
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Aditi.jpg")}
                          />
                          <p className="team-name">
                          Aditi Jain
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Aniket.jpg")}
                          />
                          <p className="team-name">
                          Aniket Goel
                          </p>
                      </div>
                      </div>
                    </Col>
                </Row>
                <Row>
                <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Akriti.jpg")}
                          />
                          <p className="team-name">
                          Akriti Chakravorty
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Aneri.jpg")}
                          />
                          <p className="team-name">
                          Aneri Dani
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Nivedita.jpg")}
                          />
                          <p className="team-name">
                          Nivedita Singh
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Sonali.jpg")}
                          />
                          <p className="team-name">
                          Sonali Taparia
                          </p>
                      </div>
                      </div>
                    </Col>
                </Row>
                <Row>
                <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Chhavi.jpg")}
                          />
                          <p className="team-name">
                          Chhavi Jain
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Prateek.jpg")}
                          />
                          <p className="team-name">
                          Prateek Agarwal
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Avantika.jpg")}
                          />
                          <p className="team-name">
                          Avantika Sheth
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Madhur.jpg")}
                          />
                          <p className="team-name">
                          Madhur Mandhana
                          </p>
                      </div>
                      </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">               
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Vishal.jpg")}
                          />
                          <p className="team-name">
                          Vishal Vig
                          </p>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" lg="3" className="team-section">
                    <div className="px-4">
                      <div className="card-profile-image">
                        <img
                            alt="..."
                            className="rounded-circle team-image"
                            src={require("assets/img/team/Hiya.jpg")}
                          />
                          <p className="team-name">
                          Hiya Rathi
                          </p>
                      </div>
                      </div>
                    </Col>
                    
                </Row>
                
      </>
    );
  }
}

export default TeamTab;