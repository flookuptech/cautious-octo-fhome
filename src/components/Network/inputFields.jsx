import React, { Fragment } from "react";
import { Button, FormGroup, Label, Input, Col, Row, Spinner } from "reactstrap";
import { textFieldsArray } from "./inputFieldsArray";
import { Multiselect } from "multiselect-react-dropdown";
import "./networkForm.css";

const options = [
  { name: "Actuarial Valuation" },
  { name: "Bank/Debt Syndication" },
  { name: "Book Keeping and Accountancy" },
  { name: "Capital Restructuring" },
  { name: "CIBIL Search Report" },
  { name: "Cost Accounting" },
  { name: "Cost Report" },
  { name: "Data Analytics" },
  { name: "Direct Taxation" },
  { name: "Drafting" },
  { name: "Due Diligence" },
  { name: "FEMA Compliance" },
  { name: "Fintech" },
  { name: "Fund Raising" },
  { name: "Incorporation" },
  { name: "Indirect Taxation" },
  { name: "Insolvency" },
  { name: "Insurance" },
  { name: "Internal Audit" },
  { name: "Labour Laws" },
  { name: "Management Consulting" },
  { name: "Merchant Banking" },
  { name: "Mergers & Acquisition" },
  { name: "Rating" },
  { name: "RBI Compliance" },
  { name: "Resources" },
  { name: "ROC Search Report" },
  { name: "Share Valuation" },
  { name: "SME IPO" },
  { name: "Statutory Audit" },
  { name: "Statutory Compliances" },
  { name: "Trademark, Patent & Copyright" },
  { name: "Transfer Pricing" },
  { name: "Valuation of Land/Building" },
  { name: "Valuation of Plant/Machinery" },
  { name: "Virtual CFO" },
  { name: "Visualisation" },
  { name: "Wealth Management" },
  { name: "Others" },
];

const FormFields = ({ onChange, onSubmit, handleSelectChange, loading }) => {
  return (
    <Fragment>
      <Row form>
        {textFieldsArray.map((item) => {
          return (
            <Col key={item.label} sm={12} md={6} lg={6}>
              <FormGroup>
                <Label style={{ color: "#2f3750" }} for={item.name}>
                  {item.label}
                </Label>
                <Input
                  type={item.type}
                  name={item.label}
                  id={item.name}
                  onChange={onChange}
                  placeholder={item.placeholder}
                  required={item.required}
                  pattern={item.label === "Contact Number" ? "[0-9]{10}" : null}
                />
              </FormGroup>
            </Col>
          );
        })}
      </Row>
      <FormGroup row>
        <Label
          style={{ color: "#2f3750" }}
          for="exampleSelectMulti"
          md={5}
          sm={12}
        >
          Select Services (MAX 5 are allowed)
        </Label>
        <Col sm={10} lg={7}>
          <Multiselect
            style={{
              optionContainer: {
                height: "20vh",
              },
            }}
            options={options}
            selectionLimit={5}
            onSelect={handleSelectChange}
            onRemove={handleSelectChange}
            displayValue="name"
            avoidHighlightFirstOption={true}
          />
        </Col>
      </FormGroup>
      <br />
      <Button
        className="submitButton"
        size="sm"
        onSubmit={onSubmit}
        disabled={loading ? true : false}
      >
        {loading ? (
          <Spinner animation="border" role="status" />
        ) : (
          "Submit Details"
        )}
      </Button>
    </Fragment>
  );
};

export default FormFields;
