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

class ServicesTabs extends React.Component {
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
            {/* <NavItem>
              <NavLink
                disabled
                href="#"
              >
                FINTECH
              </NavLink>
              </NavItem> */}
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
                Audit Assistance
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
                GST Consulting
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
                Compliance Health Care
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 4
                })}
                onClick={e => this.toggleNavs(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                Due Diligence
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 5}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 5
                })}
                onClick={e => this.toggleNavs(e, "tabs", 5)}
                href="#pablo"
                role="tab"
              >
                International Taxation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 6}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 6
                })}
                onClick={e => this.toggleNavs(e, "tabs", 6)}
                href="#pablo"
                role="tab"
              >
                Outsourcing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 7}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 7
                })}
                onClick={e => this.toggleNavs(e, "tabs", 7)}
                href="#pablo"
                role="tab"
              >
                Management Consulting
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 8}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 8
                })}
                onClick={e => this.toggleNavs(e, "tabs", 8)}
                href="#pablo"
                role="tab"
              >
                Debt Syndication
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                  Test
                </p>
              </TabPane>
              <TabPane tabId="tabs4">
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              </TabPane>
              <TabPane tabId="tabs5">
                <p className="description">
                  Test
                </p>
              </TabPane>
              <TabPane tabId="tabs6">
                <p className="description">
                  Test
                </p>
              </TabPane>
              <TabPane tabId="tabs7">
                <p className="description">
                  Test
                </p>
              </TabPane>
              <TabPane tabId="tabs8">
                <p className="description">
                  Test
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