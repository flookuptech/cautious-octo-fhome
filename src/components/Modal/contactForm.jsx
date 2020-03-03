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
import Logo from "../../assets/img/theme/Logo.png"

class ContactForm extends React.Component {
  state = {
    defaultModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
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
                    <img src={Logo} alt="logo" style={{height:35,width:100}} />
                    <br/>
                    <br/>
                      <p style={{fontSize:20}}>Contact Form</p>
                     
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                        <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="name" />
                        </InputGroup>
                        </FormGroup>
                      <FormGroup className="mb-3">   
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-tablet-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Contact Number" type="contact" />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4 btn11 submit-btn"
                          color="primary"
                          type="button"
                        >
                          Submit
                        </Button>
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
