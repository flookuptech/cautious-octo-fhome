import React, {Suspense} from "react";

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
import FinTech from "components/finTech";
import Valuations from "components/valuations";
import RatingsBar from "components/ratingsBar";
import VirtualCfo from "components/virtualCfo";
import Services from "components/services";
import Insurance from "components/insurance";
import Recruitment from "components/recruitment";
import Visualizations from "components/visualizations";
import FundRaising from "components/fundRaising";
import BackgroundWave from "components/backgroundWave";

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
