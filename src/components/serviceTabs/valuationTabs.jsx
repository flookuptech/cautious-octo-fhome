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

class ValuationTabs extends React.Component {
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
                Registered Valuer
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
                Merchant Banker
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                Reaching the right value keeping in mind all variables has been the key factor for various start ups, Industry players, private equity houses in entrusting us over the last 3 years. We work on prescribed guidelines and models of valuation and do a meticulous study and reach a fair valuation.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                We provide a spectrum of merchant banking and investment banking services. Our team of experienced professionals specialize in assisting small and medium enterprises in raising growth capital. We understand the sector specific metrics, drivers, priorities and challenges which helps us position our client’s businesses better.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ValuationTabs;