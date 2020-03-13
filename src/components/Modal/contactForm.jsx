import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal
} from "reactstrap";

import Logo from "../../assets/img/theme/logo-01.png"

class ContactForm extends React.Component {
  state = {
    defaultModal: false,
    status:""
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  

  
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  
  render() {
    const { status } = this.state;
    this.submitForm = this.submitForm.bind(this);
    return (
      <>
      <Button
              color="default"
              type="button"
              onClick={() => this.toggleModal("formModal")}
              className="btn11"
            >
              Click to Connect
            </Button>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5 contact-card-header" >
                    <div className="text-muted text-center mt-2 mb-3">
                    <img src={Logo} alt="logo" style={{height:90}} />
                    <br/>
                    <br/>
                      <p style={{fontSize:20}}>Contact Form</p>
                     
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form"
                      onSubmit={this.submitForm}
                      action="https://formspree.io/xnqvwaeo"
                      method="POST">
                        <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" id="name" name="name" type="name" required />
                        </InputGroup>
                        </FormGroup>
                      <FormGroup className="mb-3">   
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" id="email" name="email" type="email" required />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-chat-round" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Message" id="message" name="message" type="message" required />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-tablet-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Contact Number" id="contact" name="contact" type="tel" pattern="[0-9]{10}" required />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                      {status === "SUCCESS" ? <p>Thanks!</p> : 
                        <Button
                          className="my-4 btn11 submit-btn"
                          color="primary"
                          type="submit"
                        >
                          Submit
                        </Button>}
                        {status === "ERROR" && <p style={{paddingTop:30}}>Ooops! There was an error.</p>}
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
      </>
);
}
}
export default ContactForm;
