import React from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";
// nodejs library that concatenates classes
// import classnames from "classnames";

// reactstrap components
// import {
//   Badge,
//   Container,
//   Row,
//   Col,
//   Card,
//   CardBody,
//   CardImg
// } from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar";
import CardsFooter from "../components/Footers/SimpleFooter";
import Hero from "../components/Hero";
import Cards from "../views/IndexSections/Cards";
import FinTech from "components/finTech";
import WhatsappBar from "components/whatsAppBar";
import Valuations from "components/valuations";
import RatingsBar from "components/ratingsBar";
import VirtualCfo from "components/virtualCfo";
import Services from "components/services";
import Insurance from "components/insurance";
import Recruitment from "components/recruitment";
import Visualizations from "components/visualizations";
import FundRaising from "components/fundRaising";
import About from "../components/about";

// index page sections

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
  
          <Hero />
          {/* <Cards /> */}
          <FinTech />
          {/* <WhatsappBar /> */}
          <Valuations />
          <RatingsBar />
          <VirtualCfo />
          <Services />
          <Insurance/>
          <Recruitment/>
          <Visualizations/>
          <FundRaising/>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
