import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Form,
  Row,
  Spinner,
} from "reactstrap";

import { toast } from "react-toastify";
import { api } from "../../../services/api";
import {
  Welcome,
  Accident,
  Vehicle,
  MoreInformation,
  Witness,
} from "./Cards/index";
import Confirmation from "./Cards/Confirmation";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNextForm = this.handleNextForm.bind(this);
    this.handlePrevForm = this.handlePrevForm.bind(this);
    this.handleAddVehicle = this.handleAddVehicle.bind(this);
    this.handleAddWitness = this.handleAddWitness.bind(this);
    this.sendRegister = this.sendRegister.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      forms: 1,
      nextPage: false,
      city: "Maceió",
      type_accident: "",
      zone: "",
      feriado: "",
      image: "",
      type_vehicle: "",
      number_occupants: "",
      state_vehicle: "",
      category_vehicle: "",
      safe_vehicle: "",
      name: "",
      sex: "",
      rg: "",
      uf_rg: "",
      cnh: "",
      cpf: "",
      birth_date: "",
      cep: "",
      uf: "",
      municipality: "",
      address: "",
      number_address: "",
      complement_address: "",
      district: "",
      phone: "",
      email: "",
      array_vehicle: [],
      array_witness: [],
    };
  }

  async sendRegister() {
    try {
      const response = await api.post("/occurrences", this.state);
      console.log("State:", response);
      if (response.data.mensagem) {
        toast.success("Registro de ocorrência cadastrado com sucesso!");
        setTimeout(() => {
          this.props.history.push("/");
        }, 3000)
      }
    } catch {
      toast.error("Ocorreu algum erro, tente novamente!");
    }
  }

  handleAddVehicle(vehicle) {
    console.log("ArrayVehicle:", [...this.state.array_vehicle, vehicle]);
    this.setState({ array_vehicle: [...this.state.array_vehicle, vehicle] });
  }

  handleAddWitness(witness) {
    console.log("ArrayWitness:", [...this.state.array_witness, witness]);
    this.setState({ array_witness: [...this.state.array_witness, witness] });
  }

  handleInputChange(e) {
    console.log(`Campo: ${e.target.name} || ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => {
      return { fadeIn: !prevState };
    });
  }

  handleNextForm() {
    this.setState((prevState) => {
      return { forms: prevState.forms + 1 };
    });
  }
  handlePrevForm() {
    if (this.state.forms > 1) {
      this.setState({ forms: this.state.forms - 1 });
    } else {
      return;
    }
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
                    {this.state.forms === 1 && (
                      <Welcome handleNextForm={this.handleNextForm} />
                    )}

                    {this.state.forms === 2 && (
                      <Accident
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)}
                        handleNextForm={this.handleNextForm}
                        handlePrevForm={this.handlePrevForm}
                      />
                    )}

                    {this.state.forms === 3 && (
                      <Vehicle
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)}
                        handleNextForm={this.handleNextForm}
                        handlePrevForm={this.handlePrevForm}
                      />
                    )}

                    {this.state.forms === 4 && (
                      <MoreInformation
                        state={this.state}
                        setState={this.handleAddVehicle}
                        onChange={(e) => this.handleInputChange(e)}
                        handleNextForm={this.handleNextForm}
                        handlePrevForm={this.handlePrevForm}
                      />
                    )}

                    {this.state.forms === 5 && (
                      <Witness
                        state={this.state}
                        setState={this.handleAddWitness}
                        onChange={(e) => this.handleInputChange(e)}
                        handleNextForm={this.handleNextForm}
                        handlePrevForm={this.handlePrevForm}
                      />
                    )}

                    {this.state.forms === 6 && (
                      <Confirmation
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)}
                        handleSendRegister={this.sendRegister}
                        handlePrevForm={this.handlePrevForm}
                      />
                    )}
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
