
import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import '../assets/css/homecustom.css';
import TeamTab from "./serviceTabs/teamTab";


class About extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
      <DemoNavbar/>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover about-section section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span className="animate-bg" />
              <span className="animate-bg" />
              <span className="animate-bg" />
              <span className="animate-bg" />
              <span className="animate-bg" />
              <span className="animate-bg" />
              <span className="animate-bg" />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
            <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="12" xs="12">
                     {/* <img
                      alt="..."
                      className="img-fluid banner-img-logo"
                      src={require("assets/img/theme/Logo.png")}/> */}
     
                    <h1 style={{color:"#000",fontSize:48}} className="display-3 text-white about-header">
                      About Us
                    </h1> 
                  </Col>
                </Row>
              </div>
          </section>
          <section className="section about-card-align">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <div className="mt-5 about-card py-5 text-center">
                    <Row className="justify-content-center">
                      <Col lg="12">
                        <p>
                        FlookUp was born with one mission: “Understanding Money.”We create unique, beautiful, compelling, and easy-to-understand guides and visualizations to help people make better financial decisions. By turning complicated economic & financial matters into digestible visuals accompanied by insightful articles, we help people become better informed about financial facts that impact their lives.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
              <Row style={{paddingTop:60}}>
                  <Card className="shadow"> 
                      <h5 className="team-tag-line" style={{textAlign:"center",paddingTop:20,fontSize:40,fontWeight:"bold"}}>
                          Meet Our Team
                      </h5>                    
                  <TeamTab/>
                  </Card>
              </Row>
            
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default About;
