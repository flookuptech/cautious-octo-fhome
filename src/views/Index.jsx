import React from "react";
import { Zoom } from "react-reveal";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar";
import CardsFooter from "../components/Footers/SimpleFooter";
import Hero from "../components/Hero";
import FinTech from "components/finTech";
import Valuations from "components/valuations";
import VirtualCfo from "components/virtualCfo";
import Services from "components/services";
import Insurance from "components/insurance";
import Recruitment from "components/recruitment";
import Visualizations from "components/visualizations";
import FundRaising from "components/fundRaising";

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
          <Zoom>
          <FinTech />
          <Valuations />
          <VirtualCfo />
          <Services />
          <Visualizations/>
          <FundRaising/>
          <Insurance/>
          {/* <Recruitment/> */}
          </Zoom>
        </main>
        <CardsFooter />
        
      </>
    );
  }
}

export default Landing;
