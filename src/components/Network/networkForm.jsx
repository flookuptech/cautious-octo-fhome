import React, { Component, Fragment } from "react";
import { Container, NavbarBrand, Navbar } from "reactstrap";
import "../../assets/css/homecustom.css";
import "./networkForm.css";
import InputFields from "./inputFields";

class NetworkForm extends Component {
  state = {
    data: {},
    selectedServices: [],
    formSubmitted: false,
    loading: false,
  };

  redirectToHome = () => {
    setTimeout(() => {
      this.props.history.push("/");
    }, 5000);
  };

  handleOnChange = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };

  handleSelectChange = (event) => {
    this.setState({
      selectedServices: Array.from(event, (item) => item.name),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedServices, loading } = this.state;
    if (selectedServices.length === 0) {
      alert("Please select atleast 1 Service before submitting the form");
    }
    if (selectedServices.length !== 0) {
      this.setState({ loading: !loading });
      const data = new FormData();
      var dataLabels = Object.keys(this.state.data);
      var dataValues = Object.values(this.state.data);
      for (var i = 0; i < dataLabels.length; i++) {
        data.append(dataLabels[i], dataValues[i]);
      }
      var services = [
        "Service 1",
        "Service 2",
        "Service 3",
        "Service 4",
        "Service 5",
      ];
      for (var j = 0; j < selectedServices.length; j++) {
        data.append(services[j], selectedServices[j]);
      }
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbzBW2h6Wh3Yuiza1u4ikpcnzh1WHzBNYCe0Yj8vevIQ8yka3ZU/exec";
      fetch(scriptUrl, { method: "POST", body: data })
        .then((response) =>
          response.status === 200
            ? this.setState({ formSubmitted: true, loading: !loading })
            : null
        )
        .catch((error) => console.error("Error!", error));
    }
  };

  render() {
    const { formSubmitted, loading } = this.state;

    return (
      <Fragment>
        <header className="header-global">
          <Navbar
            className="navbar-main nav-align headroom"
            style={{ backgroundColor: "#2f3750" }}
            expand="lg"
            id="navbar-main"
          >
            <NavbarBrand className="mr-lg-5">
              <img
                className="logo-size"
                alt="flookup"
                src={require("assets/img/theme/Flookup_white.png")}
              />
            </NavbarBrand>
          </Navbar>
        </header>
        <Fragment>
          <Container className="App">
            {formSubmitted === false ? (
              <Fragment>
                <h2 align="center">Finance Network</h2>
                <form
                  className="form"
                  name="submit-to-google-sheet"
                  onSubmit={this.handleSubmit}
                >
                  <InputFields
                    onChange={this.handleOnChange}
                    onSubmit={this.handleSubmit}
                    handleSelectChange={this.handleSelectChange}
                    loading={loading}
                  />
                </form>
              </Fragment>
            ) : (
              <Fragment>
                <h1 align="center">Thank You !!</h1>
                {this.redirectToHome()}
              </Fragment>
            )}
          </Container>
          <br />
        </Fragment>
      </Fragment>
    );
  }
}

export default NetworkForm;
