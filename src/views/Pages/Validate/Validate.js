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
        console.log('id:', ocorrence)
        try {
            const { data } = await api.get(`/occurrences/${ocorrence?.id}`)
            console.log('ocurrence: ', data.occurrence)
            toast.success("Lista de ocorrências carregadas com sucesso!")
            this.setState({ occurrence: data.occurrence })
            this.setState({ loading: true })
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
            this.setState({ loading: true })
        }
    }

    async handleSendStatus(status) {
        // console.log("Status: ", status)
        let ocorrence = this.props.match.params;
        // console.log('id', ocorrence)
        try {
          const response = await api.put(`/occurrences/${ocorrence?.id}/status`, {
              status: status
          })
          console.log('response: ', response)
          toast.success("Lista de ocorrências carregadas com sucesso!")
          this.props.history.push('/ocorrencias')
          // this.setState({ occurrence: data.occurrence })
          // this.setState({ loading: true })
        } catch (error) {
          toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
          // this.setState({ loading: true })
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
                                            handleSendStatus={(status) => this.handleSendStatus(status) }
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
