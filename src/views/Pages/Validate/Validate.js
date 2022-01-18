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

import {
    Accident,
    Vehicle,
    MoreInformation,
    Witness,
    Confirmation
} from "../RegisterOcorrencia/Cards/index";


import { toast } from "react-toastify";
import { api } from "../../../services/api";

class Validation extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNextForm = this.handleNextForm.bind(this);
        this.handlePrevForm = this.handlePrevForm.bind(this);
        this.state = {
            forms: 1,
            occurrence: {}
        }
    }

    handleInputChange(e) {
        console.log(`Campo: ${e.target.name} || ${e.target.value}`);
        this.setState({
            [e.target.name]: e.target.value,
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

    async handleGetOcurrence() {
        // this.setState({loading: true})
        let ocorrence = this.props.match.params;
        // console.log('id:', ocorrence)
        try {
            const { data } = await api.get(`/occurrences/${ocorrence?.id}`)
            // console.log('ocurrence: ', data.occurrence)
            toast.success("Lista de ocorrências carregadas com sucesso!")
            this.setState({ occurrence: data.occurrence })
            this.setState({ loading: true })
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
            this.setState({ loading: true })
        }
    }

    async handleSendStatus(status, message) {
        let occurrence = this.props.match.params;
        //Altera o status da ocorrencia
        try {
            const response = await api.put(`/occurrences/${occurrence?.id}/status`, {
                status: status
            })
            if (response.status == 200) {
                let data = {
                    email: this.state.occurrence.email,
                    message: status === "Aprovado" ? "Sua ocorrência foi aprovada" : `Sua ocorrência foi reprovada, pelos motivos: ${message}`,
                    occurrence: occurrence.id
                }
                //Envia o email com base no status do usuario que cadastrou a ocorrencia
                const sendEmail = await api.post("/user/sendemail", data)
                if (sendEmail.status === 200) {
                    toast.success(sendEmail.data.message)
                    this.props.history.push('/ocorrencias')
                } else {
                    toast.error(sendEmail.data.message)
                }
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
        }
    }

    componentWillMount() {
        this.handleGetOcurrence()
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
                            <CardBody>
                                <Form className="form-horizontal">
                                    {this.state.forms === 1 && (
                                        <Accident
                                            state={this.state.occurrence}
                                            onChange={(e) => this.handleInputChange(e)}
                                            handleNextForm={this.handleNextForm}
                                            handlePrevForm={this.handlePrevForm}
                                            disabled={true}
                                        />
                                    )}

                                    {this.state.forms === 2 && (
                                        <Vehicle
                                            state={this.state.occurrence}
                                            onChange={(e) => this.handleInputChange(e)}
                                            handleNextForm={this.handleNextForm}
                                            handlePrevForm={this.handlePrevForm}
                                            disabled={true}
                                        />
                                    )}

                                    {this.state.forms === 3 && (
                                        <MoreInformation
                                            state={this.state.occurrence}
                                            handleNextForm={this.handleNextForm}
                                            handlePrevForm={this.handlePrevForm}
                                            disabled={true}

                                        />
                                    )}
                                    {this.state.forms === 4 && (
                                        <Witness
                                            state={this.state.occurrence}
                                            handleNextForm={this.handleNextForm}
                                            handlePrevForm={this.handlePrevForm}
                                            disabled={true}
                                        />
                                    )}
                                    {this.state.forms === 5 && (
                                        <Confirmation
                                            state={this.state.occurrence}
                                            handleNextForm={this.handleNextForm}
                                            handlePrevForm={this.handlePrevForm}
                                            handleSendStatus={(status, message) => this.handleSendStatus(status, message)}
                                            disabled={true}
                                        />
                                    )}
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Validation;
