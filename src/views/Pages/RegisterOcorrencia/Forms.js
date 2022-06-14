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
import { getUser } from "../../../services/auth";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import axios from 'axios'
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

    this.handleGetCEP = this.handleGetCEP.bind(this);
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
      loading: false,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      forms: 1,
      nextPage: false,
      address_occurrence: "",
      address_crossing: "",
      lat_occurrence: "",
      lng_occurrence: "",
      type_accident: "",
      zone: "",
      feriado: "",
      description_occurrence: "",
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
      cpf: getUser()?.cpf,
      birth_date: "",
      cep: "",
      uf: "",
      municipality: "",
      address: "",
      number_address: "",
      complement_address: "",
      district: "",
      phone: getUser()?.telephone,
      email: getUser()?.email,
      array_vehicle: [],
      array_witness: [],
    };
  }

  async sendRegister() {
    this.setState({ loading: true })

    const data = new FormData();
    Array.from(this.state.images).forEach((file) => {
      data.append("files", file);
    });

    let newOcorrence = {
      address_occurrence: this.state.address_occurrence,
      address_crossing: this.state.address_crossing,
      lat_occurrence: this.state.lat_occurrence,
      lng_occurrence: this.state.lng_occurrence,
      type_accident: this.state.type_accident,
      zone: this.state.zone,
      feriado: this.state.feriado,
      description_occurrence: this.state.description_occurrence,
      type_vehicle: this.state.type_vehicle,
      number_occupants: this.state.number_occupants,
      state_vehicle: this.state.state_vehicle,
      category_vehicle: this.state.category_vehicle,
      safe_vehicle: this.state.safe_vehicle,
      plate: this.state.plate,
      renavam: this.state.renavam,
      pellicle: this.state.pellicle,
      airbag: this.state.airbag,
      name: this.state.name,
      sex: this.state.sex,
      rg: this.state.rg,
      uf_rg: this.state.uf_rg,
      cnh: this.state.cnh,
      cpf: this.state.cpf,
      birth_date: this.state.birth_date,
      cep: this.state.cep,
      uf: this.state.uf,
      municipality: this.state.municipality,
      address: this.state.address,
      number_address: this.state.number_address,
      complement_address: this.state.complement_address,
      district: this.state.district,
      phone: this.state.phone,
      email: this.state.email,
      array_vehicle: this.state.array_vehicle,
      array_witness: this.state.array_witness,
    }

    // console.log(data);

    try {
      const response = await api.post("/occurrences", newOcorrence);
      console.log("State:", response);


      // if (response?.data?.message && response?.data?.occurrence_id) {
      //   data.append("occurrence_id", response.data.occurrence_id);
      //   const responseUpload = await api.put("/occurrences/upload", data);
      //   console.log("upload message:", responseUpload)

      // }
      console.log("response:", response)
      this.setState({ loading: false })
      toast.success("Registro de ocorrência cadastrado com sucesso!");
      setTimeout(() => {
        this.props.history.push("/");
      }, 2000);
    } catch {
      this.setState({ loading: false })
      toast.error("Ocorreu algum erro, tente novamente!");
    }
  }

  handleAddVehicle(vehicle) {
    //console.log("ArrayVehicle:", [...this.state.array_vehicle, vehicle]);
    this.setState({ array_vehicle: [...this.state.array_vehicle, vehicle] });
  }

  handleAddWitness(witness) {
    //console.log("ArrayWitness:", [...this.state.array_witness, witness]);
    this.setState({ array_witness: [...this.state.array_witness, witness] });
  }


  async handleGetCEP(cepAddress) {
    try {
      const { data } = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cepAddress}`);
      const { state, city, neighborhood, street } = data;

      this.setState({
        uf: state,
        municipality: city,
        district: neighborhood,
        address: street,
      })

      toast.success("Dados do CEP encontrados com sucesso!");
    } catch (error) {
      this.setState({
        uf: "",
        municipality: "",
        district: "",
        address: "",
      });
      toast.error("Erro ao buscar dados do CEP");
    }
  }

  handleInputChange(e) {
    if (e.target?.name === "cep" && e.target?.value.length === 9) {
      //console.log("CEP:", e.target.value)
      this.handleGetCEP(e.target?.value)
    }

    //console.log(`Campo: ${e.target.name} || ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSetAddress(address) {
    ////console.log("address:", address)
    this.setState({
      address_occurrence: address.address_occurrence,
      lat_occurrence: address.lat_occurrence,
      lng_occurrence: address.lng_occurrence
    });
  }

  handleInputFile(value) {
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

  componentDidMount() {
    //console.log(getUser())
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
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
                        loading={this.state.loading}
                        onChange={(e) => this.handleInputChange(e)}
                        handleSendRegister={this.sendRegister}
                        handlePrevForm={this.handlePrevForm}
                      />
                    )}
                  </Form>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
