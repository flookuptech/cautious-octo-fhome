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

class FinTechTabs extends React.Component {
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
                CAassist
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
                15CACB
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
                FAST
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
                Certification
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
                Vendor Onboarding
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow card-border">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                A one-point customized repository  to maintain a record of client documentation. (All statutory records, obligatory records etc) We have developed this platform by amalgamating technology (AI/ ML)  and our experience in the field of Audit/Attestation. It covers end to end processes (It has an embedded option which enables the authorized user to upload client documents starting from Engagement Letter and Ending at Final Certificate/Report.
                </p>
                <p className="description">
                   In order to ensure data security, we have ensured data confidentiality of XXX.. In order to smoothen the process,the client can opt for the platform to be hosted on a new AWS account.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                To reduce the current turn around time of certification and providing adequate information and case studies about 15CB certificates, we have created a web solution which uses machine learning to provide the certificate and dashboard. The solution reduces the lengthy process of getting information for a single certificate from multiple websites to a single repository for the client. The repository holds all certificates for a period of 7 years which enables future learnings and aids in assessments if any.
                </p>
                <p className="description"> 
                  PS: 15CB is the Tax Determination Certificate where the CA examines the remittance with regard to chargeability provisions under Section 5 and 9 of the Income Tax Act along with the provisions of Double Tax Avoidance Agreements.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                 A consolidated tech solution to manage, tag, reconcile and provide realtime analytics of an Organization’s Fixed Assets. The solution provides a uinque QR Codes for each fixed asset.It follows the path of  a one time tagging process and thereafter verification of those assets. The process of verification is simplified and enables ones to access these assets through a mobile application.</p>
                 <p className="description">
                 These assets can be physically verified with an inbuilt scanner,which is time efficient. We have further developed options such as RFID tagging and GPS Locator for easy facilitation and reporting.
                </p>
              </TabPane>
              <TabPane tabId="tabs4">
                <p className="description">
                A repository to store all essential statutory, regulatory certificates with UDIN and detailed records such as engagement letter, management representation letter and supporting documents. A web solution which enables quick access, reduces man hours, and can be accessed remotely.
                </p>
              </TabPane>
              <TabPane tabId="tabs5">
                <p className="description">
                Companies face difficulty in maintaining adequate documentation and process around the vendor and customer on-boarding and the typical hard copy documentation or long conversations over emails is still in practice. To remove all of those and provide a hierarchy  based approval system in which all the documents are also attached for viewing and filing purposes. The solution has inbuilt SMS and Email triggers set at various events. The solution help save your manpower time. 
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default FinTechTabs;