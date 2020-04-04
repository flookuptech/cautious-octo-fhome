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

class InsuranceTabs extends React.Component {
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
                Recruitment Portal
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                Insurance
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                Wealth Management
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <h4>MonkJobs</h4>
                <p className="description">
                MonkJobs is a hiring solutions provider that offers recruiting services including headhunting and executive search across industry sectors. Our team of chartered accountants look into each profile required and assess each CV before placing it to our clients. We have our methods of screening candidates prior to proposing them to our clients which we believe are different from normal market practices and we trust we can meet our client requirements.  
                </p>
                <p className="description">
                Our method of candidate selection involves the use of our rich industry exposure (our team being finance professionals themselves) which entails we are asking substantial questions to the client which in turn formulates our thoughts and help us simmer into the profile.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <h4>Value Umbrella</h4>
                <p className="description">
                Your advisor in choosing the right Insurance plan both for Life Insurance and Health Insurance. With the use of technology we have created a platform for Financially literate community, and thereby a channel across India to help choose the right plan for you. 
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <h4>Analog Wealth Solutions</h4>
                <p className="description">
                Mutual Funds Sahi hai ? Speak to our experts and get to know it better. Based on ones risk appetite, tenure, tax saving option, Investment purposes and other requirements of the Investors; one can choose from varied Mutual Funds - Equity Fund, Debt Fund, Hybrid Fund, ELSS.
                </p>
                <p className="description"> 
                Bonds are a perfect offering to Investors looking for safe haven with reasonable returns. Bonds with varied tenure are offered by the RBI with cumulative and non-cumulative interest options. Other bonds are for investors who earned long-term capital gains from land or building or both and would like tax exemption on these gains. Speak to our experts to understand which bond suits you the best.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default InsuranceTabs;