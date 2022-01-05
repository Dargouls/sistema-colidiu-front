import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { estados } from './estados';

import { Welcome, Accident, Vehicle, MoreInformation, Witness } from './Cards/index'
import { Link } from 'react-router-dom';

import Confirmation from './Cards/Confirmation';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      forms: 1,
      city: 'Maceió',
      type_accident: '',
      zone: '',
      feriado: '',
      image: '',
      type_vehicle: '',
      number_occupants: '',
      state_vehicle: '',
      category_vehicle: '',
      safe_vehicle: '',
      name: '',
      sex: '',
      rg: '',
      uf_rg: '',
      cnh: '',
      cpf: '',
      birth_date: '',
      cep: '',
      uf: '',
      municipality: '',
      address: '',
      number_address: '',
      complement_address: '',
      district: '',
      phone: '',
      email: '',
      array_vehicle: [],
    };
  }

  handleInputChange(e) {
    console.log(`Campo: ${e.target.name} || ${e.target.value}`)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  handleNextForm() {
    this.setState((prevState) => { return { forms: prevState.forms + 1 } })
  }
  handlePrevForm() {
    this.setState((prevState) => {
      if (this.state.forms >= 2) {
        return { forms: prevState.forms - 1 }
      } else {
        console.log("Não volta!!!!")
        return;
      }
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            {/* <Fade timeout={this.state.timeout} in={this.state.fadeIn}> */}
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Registro de ocorrência
              </CardHeader>
              <Collapse isOpen={this.state.collapse} id="collapseExample">
                <CardBody>
                  <Form className="form-horizontal">

                    {this.state.forms === 1 &&
                      <Welcome />
                    }

                    {this.state.forms === 2 &&
                      <Accident
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)}
                      />
                    }

                    {this.state.forms === 3 &&
                      <Vehicle
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)} />
                    }

                    {this.state.forms == 4 &&
                      <MoreInformation
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)} />
                    }

                    {this.state.forms === 5 &&
                      <Witness
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)} />
                    }

                    {this.state.forms === 6 &&
                      <Confirmation
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)} />
                    }

                    <div className="form-actions" style={{ justifyContent: 'flex-end', display: 'flex' }}>
                      {this.state.forms >= 2 &&
                        <Button color="secondary" style={{ marginRight: 10 }} onClick={() => this.handlePrevForm()}>Voltar</Button>
                      }
                      <Button color="primary" onClick={() => this.handleNextForm()}>Próximo</Button>
                    </div>
                  </Form>

                </CardBody>
              </Collapse>
            </Card>
            {/* </Fade> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
