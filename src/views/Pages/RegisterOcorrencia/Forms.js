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
    this.handleInputFile = this.handleInputFile.bind(this);
    this.handleSetAddress = this.handleSetAddress.bind(this);
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
      address_occurrence: "",
      lat_occurrence: "",
      lng_occurrence: "",
      type_accident: "",
      zone: "",
      feriado: "",
      images: [],
      type_vehicle: "",
      number_occupants: "",
      state_vehicle: "",
      category_vehicle: "",
      safe_vehicle: "",
      plate: "",
      renavam: "",
      pellicle: "",
      airbag: "",
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
    console.log("imgs:", this.state.images);

    const data = new FormData();
    data.append("address_occurrence", this.state.address_occurrence);
    data.append("lat_occurrence", this.state.lat_occurrence);
    data.append("lng_occurrence", this.state.lng_occurrence);
    data.append("type_accident", this.state.type_accident);
    data.append("zone", this.state.zone);
    data.append("feriado", this.state.feriado);
    Array.from(this.state.images).forEach((file) => {
      data.append("files", file);
    });
    data.append("type_vehicle", this.state.type_vehicle);
    data.append("number_occupants", this.state.number_occupants);
    data.append("state_vehicle", this.state.state_vehicle);
    data.append("category_vehicle", this.state.category_vehicle);
    data.append("safe_vehicle", this.state.safe_vehicle);
    data.append("plate", this.state.plate);
    data.append("renavam", this.state.renavam);
    data.append("pellicle", this.state.pellicle);
    data.append("airbag", this.state.airbag);
    data.append("name", this.state.name);
    data.append("sex", this.state.sex);
    data.append("rg", this.state.rg);
    data.append("uf_rg", this.state.uf_rg);
    data.append("cnh", this.state.cnh);
    data.append("cpf", this.state.cpf);
    data.append("birth_date", this.state.birth_date);
    data.append("cep", this.state.cep);
    data.append("uf", this.state.uf);
    data.append("municipality", this.state.municipality);
    data.append("address", this.state.address);
    data.append("number_address", this.state.number_address);
    data.append("complement_address", this.state.complement_address);
    data.append("district", this.state.district);
    data.append("phone", this.state.phone);
    data.append("email", this.state.email);
    data.append("array_vehicle", this.state.array_vehicle);
    data.append("array_witness", this.state.array_witness);

    console.log(data);

    try {
      const response = await api.post("/occurrences", data);
      console.log("State:", response);
      if (response.data.message) {
        toast.success("Registro de ocorrência cadastrado com sucesso!");
        setTimeout(() => {
          this.props.history.push("/");
        }, 3000);
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
  handleSetAddress(address) {
    console.log("address:", address)
    this.setState({
      address_occurrence: address.address_occurrence,
    });
    this.setState({
      lat_occurrence: address.lat,
    });
    this.setState({
      lng_occurrence: address.lng
    });
  }

  handleInputFile(value) {
    // console.log("Images", value.target.files);
    this.setState({ images: value.target.files });
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
                  <Form className="form-horizontal" method="POST">
                    {this.state.forms === 1 && (
                      <Welcome handleNextForm={this.handleNextForm} />
                    )}

                    {this.state.forms === 2 && (
                      <Accident
                        state={this.state}
                        onChange={(e) => this.handleInputChange(e)}
                        onChangeAddress={(address) => this.handleSetAddress(address)}
                        handleInputFile={(e) => this.handleInputFile(e)}
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
