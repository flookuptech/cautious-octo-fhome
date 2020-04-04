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
  TabPane
} from "reactstrap";

class VisTabs extends React.Component {
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
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
              <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                Data Analytics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                Dashboards
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                Visualizations
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                The Data analyst in our team when monitored by experienced professional in the field of Finance lead to the right kind of analysis of raw data and draw a conclusion.        
                </p>
                <p className="description">
                Our data analyst team reveal trends and metrics that would otherwise be lost in the mass of information and our professional team use their experience and macro economic factors to give the right insights.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                We assist you in preparing the right format of MIS/Dashboards for the Management in your Organisation. The reporting could flow directly from your accounting solution via API or though an excel document per the Management requirement. This data helps the management in taking right decision at the right point of time. 
                </p>
                <p className="description">
                Its not just analytics we help you with, its the insights through our solution.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                Our Visualisation team prepares the visual content focussing on emerging trends in business, finance and economics. We simplify the humongous data, complex financial and economic data and information into simplified images.
                </p>
                <p className="description"> 
                You want us to analyse your data and present it into a visual which can be presented to your Board Members ? Or if you want us to help you with Market research or Industry analysis get in touch with us. 
                </p>
                {/* <Link to="/infographics">
                <Button>
                  View More
                </Button>
                </Link> */}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default VisTabs;