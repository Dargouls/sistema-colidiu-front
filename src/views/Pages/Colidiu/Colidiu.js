import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  Label,
  Row,
  Input,
  Spinner,
  Table,
  Alert,

} from 'reactstrap';
import { Link } from 'react-router-dom'
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import pdf from '../../../assets/pdf/sample.pdf'
import { getUser } from '../../../services/auth';

class Colidiu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.handleSearchOccurrence = this.handleSearchOccurrence.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCheckInputs = this.handleCheckInputs.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
    this.handleViewPDF = this.handleViewPDF.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      forms: 1,
      loading: false,
      protocolo: "",
      rg: "",
      cpf: "",
      occurrence: [],
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  handleCheckInputs() {
    const { protocolo, cpf, rg } = this.state;

    if (protocolo === "") {
      this.handleWarning("Protocolo");
      return;
    }
    if (rg === "") {
      this.handleWarning("RG");
      return;
    }
    if (cpf === "") {
      this.handleWarning("CPF");
      return;
    }

    this.handleSearchOccurrence()
  }

  handleWarning(input) {
    toast.warn(`${input} é obrigatório`);
  }

  async handleSearchOccurrence() {
    this.setState({ loading: !this.state.loading })
    console.log("Buscando ocorrências...")
    // const { protocolo, cpf, rg } = this.state;

    let params = {
      cpf: getUser().cpf
    }

    try {
      const { data } = await api.post("/cpf/occurrences", params)
      if (data.occurrences) {
        console.log(data)
        this.setState({ occurrence: data.occurrences })
        this.setState({ loading: !this.state.loading })
        // return toast.success("Ocorrência encontrada com sucesso!")
      }
      this.setState({ loading: !this.state.loading })
      // return toast.error("Ocorrência não encontrada!")
    } catch (error) {
      console.log(error)
    }
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleViewPDF() {
    const file = new Blob([pdf], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    return window.open(fileURL, '_blank');
  }

  componentDidMount() {
    this.handleSearchOccurrence();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Colidiu
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    {
                      this.state.occurrence.length === 0 ?
                        <Alert color="warning">
                          Ops, você não possui nenhum registro de ocorrência em nosso sistema!
                        </Alert>
                        :
                        <Row>
                          <Table
                            hover
                            responsive
                          >
                            <thead>
                              <tr >
                                <th>#</th>
                                <th>Nome</th>
                                <th>Veículo</th>
                                <th>Placa</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'center' }}>Ação</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.occurrence.map((item, index) => (
                                <tr key={index}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{item.name}</td>
                                  <td>{item.type_vehicle}</td>
                                  <td>{item.plate}</td>
                                  <td>{item.status}</td>
                                  <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                      <Link to={`/ocorrencia/${item.id}`}>
                                        <Button style={{marginRight: 10}}>Visualizar</Button>
                                      </Link>
                                      {/* <Button style={{ marginRight: 10 }}>Visualizar</Button> */}
                                      <Button onClick={() => this.handleViewPDF()}>Imprimir</Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Row>
                    }
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Colidiu;
