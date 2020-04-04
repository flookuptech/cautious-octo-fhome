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

class FundTabs extends React.Component {
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
                Debt Syndication
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
                Equity Funding
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                Debt is the most popular form of raising capital. We assist clients in syndication of debt for new, diversification or expansion of projects and through the entire transaction cycle from preparation of financial plans to identification of size and type of debt (short, medium or long term). 
                </p>
                <p className="description">
                Our debt syndication team ensures loan sanctioning, facilitating execution of requisite documents and due disbursal of loans. Our team carries an experience of more than a decade in banking industry (former bank executives) who specialize in facilitating project finance, term loans, working capital loans.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                Funding, in the context of startups, is when a person or an organisation provides the founders with finance in order to grow or develop the product. Equity investors require a longterm ownership stake in a venture in exchange for capital.
                </p>
                <p className="description">
                We help our Investor network connect with the investment suiting their requirement, tenure and sectors. If its an Angel Investor, VC or Strategic partner our team will help you connect with the right personnel
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default FundTabs;