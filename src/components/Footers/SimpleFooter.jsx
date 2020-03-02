/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import About from "../about";
import '../../assets/css/homecustom.css'

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                {/* <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3> */}
                <h4 className="text-primary mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" lg="6">
              <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  href="//api.whatsapp.com/send?phone=919930854822&text=I'm interested"
                  id="tooltip126536701"
                  size="lg"
                  target="_blank"
                  style={{background:"#128C7E",borderColor:"#128C7E",color:"#fff"}}
                >
                  <i className=" fa fa-whatsapp" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536701">
                  Connect on
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://twitter.com/financelookup"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/financelookup/"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="linkedin"
                  href="https://www.linkedin.com/company/f-lookup-advisors/"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Connect us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="instagram"
                  href="https://www.instagram.com/financelookup/"
                  id="tooltip626177562"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip626177562">
                  Follow us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row>
            <Col xs="12" md="4" lg="4">
            <div className="about">
              <Link to= {"/"}>
                Home
              </Link>
              <br/>
            <Link to={"/about"}>
                    About Us
                  </Link>
            <div className="blog">
                <a href="https://myregisteredvaluer.com/" target="_blank">
                    Our Blogs
                  </a>
                </div>
                </div>  
                </Col>   
                <Col xs="12" md="8" lg="8">
              <div className=" footer-contact">
               702 (L), Hubtown Solaris
               NS Phadke Marg,<br />
               Andheri East West Flyover
               Andheri East,
               Mumbai, Maharashtra 400069<br/>
               <a href = "tel: +91 9930854822">Phone: +91-9930854822</a><br/>
               <a href = "mailto: contact@flookup.com">Email: contact@flookup.com</a>
                </div>
              </Col>        
                </Row>
            <Row className=" align-items-center justify-content-md-between">
              <Col md="4">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a href={null} target="_blank">
                    F-LookUp
                  </a>
                  .
                </div>
              </Col>
             
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
