import React from "react";
import { 
    Container,
    Row,
    Col,
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane } from "reactstrap";
import {
      Link,
      DirectLink,
      Element,
      Events,
      animateScroll,
      scrollSpy,
      scroller
    } from "react-scroll";
  import classnames from "classnames";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faChartLine,faHandHoldingUsd, faLaptopCode, faChalkboardTeacher, faToolbox, faHeartbeat, faUserGraduate, faSearchDollar } from '@fortawesome/free-solid-svg-icons'
  import '../../assets/css/homecustom.css'
  import Fintech from '../finTech';
  
  class NavPills extends React.Component {
    state = {
      circledNavPills: 7
    };
    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };
    render() {
        return (
         <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
         <Container>
           <Row className="justify-content-md-center">
              <Col md="3" xs="6" lg="3" className="align-items-center">
               <NavItem className="banner-pills">
               <Link
                    activeClass="active"
                    to="fintech"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 1}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 1
                })}
                // onClick={e => this.toggleNavs(e, "circledNavPills", 1)}
                href=""
                to="pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faLaptopCode} />
                  <p className="pills-text">Fintech</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
              </Col>
              <Col md="3" xs="6" lg="3" className="align-items-center">
              <NavItem className="banner-pills">
              <Link
                    activeClass="active"
                    to="valuations"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 2}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 2
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 2)}
                href="#pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faHandHoldingUsd} />
                  <p className="pills-text">Valuations</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
              </Col>
              <Col md="3" xs="6" lg="3" className="align-items-center">
              <NavItem className="banner-pills">
              <Link
                    activeClass="active"
                    to="cfo"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 3}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 3
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 3)}
                href="#pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faChalkboardTeacher} />
                  <p className="pills-text">Virtual CFO</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
              </Col>
              <Col md="3" xs="6" lg="3" className="align-items-center">
              <NavItem className="banner-pills">
              <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 4}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 4
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 4)}
                href="#pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faToolbox} />
                  <p className="pills-text">Services</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
              </Col>

        </Row>
        <Row>&nbsp;</Row>
        <Row>
            <Col xs="6" md="3">
            <NavItem className="banner-pills">
            <Link
                    activeClass="active"
                    to="insurance"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
             <NavLink
                aria-selected={this.state.circledNavPills === 5}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 5
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 5)}
                href="#pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faHeartbeat} />
                  <p className="pills-text">Insurance</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
            </Col>
            <Col xs="6" md="3">
            <NavItem className="banner-pills">
            <Link
                    activeClass="active"
                    to="recruitment"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 6}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 6
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 6)}
                href="#pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faUserGraduate} />
                  <p className="pills-text">Recruitment</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
            </Col>
            <Col xs="6" md="3">
            <NavItem className="banner-pills">
            <Link
                    //activeClass="active"
                    to="visualization"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 7}
                className={classnames("rounded-circle", {
                //active: this.state.circledNavPills === 7
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 7)}
                href="#"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faChartLine} />
                  <p className="pills-text">Visualization</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
            </Col>
            <Col xs="6" md="3">
            <NavItem className="banner-pills">
            <Link
                    activeClass="active"
                    to="fund"
                    spy={true}
                    smooth="easeOutQuart"
                    duration={500}
                    offset={10}
                  >
                <NavLink
                aria-selected={this.state.circledNavPills === 8}
                className={classnames("rounded-circle", {
                active: this.state.circledNavPills === 8
                })}
                //onClick={e => this.toggleNavs(e, "circledNavPills", 8)}
                href="#pablo"
                role="tab"
                >
                <span className="nav-link-icon d-block">
                 <FontAwesomeIcon className="banner-pills-icon" icon={faSearchDollar} />
                  <p className="pills-text">Fund Raising</p>
                </span>
               </NavLink>
               </Link>
              </NavItem>
            </Col>
        </Row>
     </Container>
    </Nav>

);
}
}

export default NavPills;
