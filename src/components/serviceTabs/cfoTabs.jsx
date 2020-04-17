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

class CfoTabs extends React.Component {
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
                Consulting
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
                E-Commerce
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                EdTech
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
                Entertainment
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
                Fintech
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
                Food
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
                Fund House
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 8}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 8
                })}
                onClick={e => this.toggleNavs(e, "tabs", 8)}
                href="#pablo"
                role="tab"
              >
                Healthcare
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 9}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 9
                })}
                onClick={e => this.toggleNavs(e, "tabs", 9)}
                href="#pablo"
                role="tab"
              >
                IT
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 10}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 10
                })}
                onClick={e => this.toggleNavs(e, "tabs", 10)}
                href="#pablo"
                role="tab"
              >
                Manufacturing
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 11}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 11
                })}
                onClick={e => this.toggleNavs(e, "tabs", 11)}
                href="#pablo"
                role="tab"
              >
                NGO
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 12}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 12
                })}
                onClick={e => this.toggleNavs(e, "tabs", 12)}
                href="#pablo"
                role="tab"
              >
                Pharmaceutical
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 13}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 13
                })}
                onClick={e => this.toggleNavs(e, "tabs", 13)}
                href="#pablo"
                role="tab"
              >
                Real Estate
              </NavLink>
            </NavItem>
            <NavItem className="service-pills-padding">
              <NavLink
                aria-selected={this.state.tabs === 14}
                className={classnames("mb-sm-3 mb-md-0","nav-box-shadow", "tabs-align", {
                  active: this.state.tabs === 14
                })}
                onClick={e => this.toggleNavs(e, "tabs", 14)}
                href="#pablo"
                role="tab"
              >
                Trading
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                We are Growth CFO partners, right from incorporation of the Company to handling all transactions /accounting/ compliances/ valuation and raising funds.
                </p>
                <p className="description">
                Structuring of the entity having revenues from abroad, incorporating entities in Singapore, Dubai and Mumbai.Thereafter managing the finance domain for them.
                <br/> Raised funds for an NBFC to the tune of 250 Million.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                Acted as CFO partners for an e-commerce company involved in trading of industrial supplies. Actively involved in SAP implementation, banking decisions for foreign transactions, GST implementation and management discussions on future growth strategies.
                </p>
                <p className="description">
                Assisting in end to end Implementation of processes, controls and automation of reports necessary to operate in apparel and e-commerce industry.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                End to end handling of all the accounting, compliances and filing work. Tax planning and decision making MIS on transactional level for the management.
                </p>
                <p className="description">
                Consulting, Pitch deck preparation and assistance in Fund Raising for a Startup. GST Implementation and consulting work
                </p>
              </TabPane>
              <TabPane tabId="tabs4">
                <p className="description">
                Involved in INDAS implementation for one of the leading companies in theatre industry. Also assisting in preparation of consolidated financial statements which involved complex related party transactions and multiple subsidiaries / JV’s            
                </p>
                <p className="description">
                Audit Assistance for a leading theatrical company to Liaison with statutory auditors and thereby ensuring speedy completion of statutory audit for the Company which was pending for three years. Improving financial and operating effective and reducing banking cost for a US listed media entity. Implementation of IFRS 
                </p>
              </TabPane>
              <TabPane tabId="tabs5">
                <p className="description">
                Audit Assistance for a Fintech company and liasoning with statutory auditors and thereby ensuring speedy completion of statutory audit for the Company
                </p>
                <p className="description">
                Consulting, Pitch deck preparation and assistance in Fund Raising for a Startup.
                </p>                
              </TabPane>
              <TabPane tabId="tabs6">
                <p className="description">
                Assisted the management of.a leading  fast food chain in preparing of multiple MIS in relation to the properties rented and franchisee agreements entered into. 
                </p>
                <p className="description">
                Also involved in the analysis of the agreements and came up with suggestions related to changes in the agreement for the betterment of the Company
                </p>
              </TabPane>
              <TabPane tabId="tabs7">
                <p className="description">
                Valuation partners and implementation of better controls in their portfolio companies, implementing Fixed Asset solution and other tech products made by our tech team.
                </p>
                <p className="description">
                Assisting a private equity firm in consolidation of its financials statements as per IFRS which included multiple investee companies, SPV’s and JV’s.
                </p>
              </TabPane>
              <TabPane tabId="tabs8">
                <p className="description">
                Handled the Accounting, Compliances offline for Orissa based client and provided insights and comparatives for decision making.
                </p>
                <p className="description">
                Offline handling of the entire Finance domain, identification of control weaknesses and implementation of better controls at operational level.  
                </p>
              </TabPane>
              <TabPane tabId="tabs9">
                <p className="description">
                Performing payroll audit at the behest of the management to identify under/over payouts made to employees and insuring all statutory compliances were in order.
                </p>
                <p className="description">
                Handling the complete Finance Domain from accounting, GST reconciliation to collection/receivables for one of the biggest players in IT-Hotel Industry.
                </p>
              </TabPane>
              <TabPane tabId="tabs10">
                <p className="description">
                GST retainers for a listed manufacturing company with complicated & volumenous transactions. Assisting the management during the quarterly testing of controls and preparation of observation report to be presented to the Audit Committee for a Leading Bio-Technology Company.
                </p>
                <p className="description">
                Assisted the management of a large industrial equipment manufacturer in consolidation of its IFRS financial statements. Valuation of various subsidiaries, consolidation as per IFRS and taking handover of the finance/accounts team in order to get the audit closed with Big Audit firm.
                </p>
                <p className="description">
                Assisted the management of a large oilfield equipment manufacturer in Consolidation of its financial statements as per  IGAAP and IFRS. Also involved in dealing with one of the Big4 auditors to get the audit completed.
                </p>
              </TabPane>
              <TabPane tabId="tabs11">
              <p className="description">
              Assisted and Strategy consulting to one of the fastest growing NGO in over sight of the Accounts & Finance function & making detailed proposals with budgets.
                </p>
                <p className="description">
                Prepration of Pitch Deck, designing strategis for fund raise and raising funds for the NGO.
                </p>
              </TabPane>
              <TabPane tabId="tabs12">
                <p className="description">
                Transition from previous indirect tax regime to GST wherein changes in System Implication in revenues for a leading Pharma Company.
                </p>
                <p className="description">
                Assisted with Implemtation of SAP and provided resource for migration from the previous accounting solution to SAP.
                </p>
              </TabPane>
              <TabPane tabId="tabs13">
                <p className="description">
                Performed cash flow management and strategy development for a leading pile testing company.
                </p>
                <p className="description">
                Performed audit assistance services for IndAS consolidated financials of a listed real estate company. Assisting the management in capitalisation of assets for a real estate Company
                </p>
              </TabPane>
              <TabPane tabId="tabs14">
                <p className="description">
                Asisting the management of a agri-commodity Company to conduct surpise location visits in over 500 warehouses across the country
                </p>
                <p className="description">
                We assisted and handled finance and GST for SME clients in the marketing corporate gifting and event management companies.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CfoTabs;