/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import About from "../about";
import '../../assets/css/homecustom.css'
import Brand from '../../assets/img/theme/logo.gif'

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer footer-background">
          <Container>
            <Row className=" row-grid footer-grid align-items-center mb-5">
              <Col md="6" lg="6">
                {/* <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3> */}
                <h4 className="text-primary footer-text mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" md="6" lg="6">
                <Row>
                  <Col lg="12" className="footer-social">
                <span>Chat With Us </span>
              <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  href="//api.whatsapp.com/send?phone=919967110003&text=I'm interested"
                  id="tooltip126536701"
                  size="lg"
                  target="_blank"
                  style={{background:"#128C7E",borderColor:"#128C7E",color:"#fff"}}
                >
                  <i className="fa fa-whatsapp" />
                </Button>
                <span>Connect with us on</span>
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
                </Col>
                
                  <Col xs="12" lg="12" className="footer-social" style={{paddingTop:40}}>
                <span>Also follow us on </span>
                <UncontrolledTooltip delay={0} target="tooltip126536701">
                  Chat with us
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
              </Col>
            </Row>
            <hr />
            <Row>
            <Col xs="12" md="6" lg="6">
            <div className="about">
              <Link to= {"/"}>
                Home
              </Link>
              <br/>
            {/* <Link to={"/about"}>
                    About Us
                  </Link> */}
            <div className="blog">
                <a href="https://blog.flookup.com/" target="_blank">
                    Our Blogs
                  </a>
                </div>
                </div>  
                </Col>   
                <Col xs="12" md="6" lg="6">
              <div className=" footer-contact">
               702 (L), Hubtown Solaris,
               NS Phadke Marg,<br />
               Andheri East West Flyover
               Andheri East,<br/>
               Mumbai, Maharashtra 400069<br/>
               <i class="fa fa-map-marker"></i>&nbsp;<a href="https://g.page/financelookup?share" target="_blank">Find us on Map</a><br/>
               <a href = "tel: +91 9930854822">Phone: +91-9967110003</a><br/>
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
                  &nbsp;
                  <img style={{height:28}} src={Brand}/>
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
