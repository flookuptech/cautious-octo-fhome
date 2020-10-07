import React, { Component, Fragment } from "react";
import {
  Label,
  Input,
  Button,
  Form,
  FormGroup,
  Col,
  FormFeedback,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";
import Result from "./Result";
import "./DistanceApp.css";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      dest: "",
      showResult: false,
      errors: {
        origin: "",
        dest: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleResult = this.toggleResult.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "origin":
        errors.origin =
          value.length !== 6 ? "Provide valid 6 digit pincode" : "";
        break;
      case "dest":
        errors.dest = value.length !== 6 ? "Provide valid 6 digit pincode" : "";
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
      errors,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      this.toggleResult();
    } else {
      console.error("Invalid form");
    }
  }

  toggleResult() {
    this.setState({ showResult: !this.state.showResult });
  }

  render() {
    let showResult = this.state.showResult;
    const errors = this.state.errors;
    return (
      <Fragment>
        <header className="header-global">
          <Navbar
            className="navbar-main nav-align headroom"
            style={{ backgroundColor: "#2f3750" }}
            expand="lg"
            id="navbar-main"
          >
            <Link to="../">
              <NavbarBrand className="mr-lg-5">
                <img
                  className="logo-size"
                  alt="flookup"
                  src={require("assets/img/theme/Flookup_white.png")}
                />
              </NavbarBrand>
            </Link>
          </Navbar>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3
                id="head"
                className="text-center heading text-uppercase header"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Distance between zipcodes
              </h3>
            </div>
          </div>
          <br />
          <div className="row">
            <Form onSubmit={this.handleSubmit} className="col-12">
              <div className="row justify-content-between">
                <div className="col-md-6 col-sm-12 col-lg-7">
                  <FormGroup className="row">
                    <Label
                      htmlFor="origin"
                      className="label col-lg-2 col-md-3 col-sm-12"
                    >
                      Origin:
                    </Label>
                    <Col className="col-md-8 col-lg-6 col-sm-12">
                      <Input
                        className="inp"
                        type="text"
                        id="origin"
                        name="origin"
                        value={this.state.origin}
                        invalid={errors.origin !== ""}
                        onChange={this.handleChange}
                        required={true}
                      />
                      <FormFeedback>{errors.origin}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <br />
                </div>
                <div className="col-md-6 col-sm-12 col-lg-5">
                  <FormGroup className="row">
                    <Label
                      htmlFor="dest"
                      className="label col-lg-4 col-md-5 col-sm-12"
                    >
                      Destination:
                    </Label>
                    <Col className="col-md-7 col-lg-8 col-sm-12 ">
                      <Input
                        className="inp"
                        type="text"
                        id="dest"
                        name="dest"
                        value={this.state.dest}
                        invalid={errors.dest !== ""}
                        onChange={this.handleChange}
                        required={true}
                      />
                      <FormFeedback>{errors.dest}</FormFeedback>
                    </Col>
                  </FormGroup>
                </div>
              </div>
              <div className="text-center col-md-12">
                <FormGroup className="bt">
                  <Button type="submit" size="sm" className="btnn">
                    Calculate
                  </Button>
                </FormGroup>
              </div>
              <br />
            </Form>
            <div className="col-12">
              {showResult && (
                <Result
                  state={{ ...this.state }}
                  toggle={this.toggleResult}
                ></Result>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
