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
  Button,
  UncontrolledCollapse
} from "reactstrap";

class ServicesTabs extends React.Component {
  state = {
    tabs: 1,
  };
  
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
      
    });
  };
   
  changeValue(e) {
    this.setState({dropDownValue: e.currentTarget.textContent})
  }

  render() {

    return (
      <>
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
              <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                Audit Assistance
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                GST Consulting
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                Compliance Health Care
              </NavLink>
            </NavItem>        
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 4
                })}
                onClick={e => this.toggleNavs(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                Due Diligence
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 5}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 5
                })}
                onClick={e => this.toggleNavs(e, "tabs", 5)}
                href="#pablo"
                role="tab"
              >
                Internal Control Testing
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 6}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 6
                })}
                onClick={e => this.toggleNavs(e, "tabs", 6)}
                href="#pablo"
                role="tab"
              >
                Management Consulting
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 7}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 7
                })}
                onClick={e => this.toggleNavs(e, "tabs", 7)}
                href="#pablo"
                role="tab"
              >
                Government Schemes 
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                Audit being a statutory compliance with high regulatory checks every organization spends a lot of time and resources on it. The Eco system is such that our accounting and reporting guidelines are under frequent updations requiring precise reporting, additional disclosures and higher compliances.</p>
                <p className="description">
                Our team of CA’s help bridge the gap between the client and the auditors and help in providing timely deliverables.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                Our Indirect tax experts offer exhaustive consulting as per verticals and industry to the client and guide them about their GST compliance procedures and updating them with   in guiding and keeping them updated about GST, its impact on their organization.</p>
                <p className="description">
                We aim to align our knowledge and expertise with your Company’s existing accounting team and achieve optimum results.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                Review of Company’s data for a sample period from a Compliance perspective to identify gaps in compliance/ exposures and identify loopholes if any. We have our own comprehensive industry specific checklists which are curated by our in house CA’s who have rich industry experience.
                </p>
              </TabPane>
              <TabPane tabId="tabs4">
                <p className="description">
                Our team of diligent professionals specialize in both buy side, sell side transactions. We aim to maximize value for any proposed transaction and therefore we have industry specific professionals to carry out a diligence. Our approach to diligence is situational and dynamic. We specialize in Financial, Tax, Human Resources and Legal due diligence.
                </p>
              </TabPane>
              <TabPane tabId="tabs5">
                <p className="description">
                Our process of planning, analysis and testing helps the Management in assessing the GAPs in the system and our suggestions would help in implementation of better controls around the GAPs.
                </p> 
                <p className="description">
                Our procedures are inline with the business vision and goals. Understanding organizational protocols, relationships and processes. We Design the internal audit calendar after a through discussion with the Management taking into consideration their expectations.
                </p>
              </TabPane>
              <TabPane tabId="tabs6">
                <p className="description">
                Consulting is more than just giving Advice. We assist organisations to improve their performance by leveraging technology and carrying out in depth strategy and process analysis through brain storing and aligning management vision. </p>
                <p className="description">
                We help businesses improve their performance and thereby help them  grow by solving problems and finding new and better ways of doing things thereby bringing both efficiency and effectiveness in the process.</p>          
              </TabPane>
              <TabPane tabId="tabs7">
                <p className="description">
                Micro, small and medium enterprises (MSMEs) form a substantial chunk of the organized business sector in India, and our focus is to assist these MSMEs and Startups with the various loan schemes, government subsidies and recognition to help them grow.
                </p>
                <p className="description"> 
                We have an entire database of all the Government schemes in your state applicable to your Industry, we help you understand the scheme applicable and assist you in sending the application to the Government.  
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ServicesTabs;