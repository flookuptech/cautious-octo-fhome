import React from "react";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
import LinkedinTeam from "./linkedinTeam";
import WhatsappTeam from "./whatsappTeam";

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
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                        <a href="https://www.linkedin.com/in/vaibhav-mandhana-92786882/" target="_blank">
                          <LinkedinTeam/>
                        </a>
                        &nbsp;
                        &nbsp;
                        <a href="//api.whatsapp.com/send?phone=919967110003&text=I'm interested" target="_blank" style={{color:"#3b8c7f"}}>
                          <WhatsappTeam/>
                        </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/neha-jain-55065067/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/akash-agarwal-5716b388/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/antim-patni-42a685137/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                   <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/rasesh-seth-2a957a50/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/sujata-mandhana-bb464522/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/aditi-jain-26406968/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/aniket-goel-9661925b/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                   <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/akriti-chakravorty-2a121b2b " target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/aneridani/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/nivedita-singh-9629689/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/sonali-taparia-mandhana-4615a6aa/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                   <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/chhavi-jain-a9096815/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/prateek-agrawal-53b4133b/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/avantika-toshniwal-sheth-857b47a8/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      {/* <div style={{textAlign:"center"}}>
                      <a href="https://www.linkedin.com/in/chhavi-jain-a9096815/">
                      <LinkedinTeam/>
                      </a>
                      </div> */}
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center",paddingBottom:20}}>
                      <a href="https://www.linkedin.com/in/vishal-vig-44084155/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    <Col xs="6" md="4" lg="3" className="team-section">
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
                      <div style={{textAlign:"center",paddingBottom:20}}>
                      <a href="https://www.linkedin.com/in/hiya-rathi-a27a0982/" target="_blank">
                      <LinkedinTeam/>
                      </a>
                      </div>
                      </div>
                    </Col>
                    
                </Row>
                
      </>
    );
  }
}

export default TeamTab;