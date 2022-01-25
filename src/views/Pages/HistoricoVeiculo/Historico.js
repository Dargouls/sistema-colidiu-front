import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Collapse,
    Form,
    Row,
} from "reactstrap";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { Welcome, Search, Result } from './Cards'

class Historico extends Component {
    constructor(props) {
        super(props);
        this.handleNextForm = this.handleNextForm.bind(this);
        this.handlePrevForm = this.handlePrevForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchHistory = this.handleSearchHistory.bind(this);
        this.state = {
            collapse: true,
            forms: 1,
            history: {},
            renavam: "",
        };
    }
    async handleSearchHistory() {

        try {
            const response = await api.post("/renavam/occurrences", { renavam: this.state.renavam });
            // console.log("State:", response);
            // console.log("State:", typeof this.state.renavam);
            if (response.data.message === "Tudo foi ok!") {
                toast.success("Registro de ocorrência encontrado com sucesso!");
                this.setState({history: response.data.occurrences[0]})
                this.handleNextForm()
            } else {
                toast.error(response.data.message);
            }
        } catch {
            toast.error("Ocorreu algum erro, por favor tente novamente!");
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


    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-edit"></i>Historico do Veículo
                            </CardHeader>
                            <Collapse isOpen={this.state.collapse} id="collapseExample">
                                <CardBody>
                                    <Form className="form-horizontal" method="POST">
                                        {this.state.forms === 1 && (
                                            <Welcome
                                                handleNextForm={this.handleNextForm}
                                            />
                                        )}

                                        {this.state.forms === 2 && (
                                            <Search
                                                onChange={(e) => this.handleInputChange(e)}
                                                handleNextForm={this.handleNextForm}
                                                handleSearchHistory={this.handleSearchHistory}
                                                handlePrevForm={this.handlePrevForm}
                                            />
                                        )}

                                        {this.state.forms === 3 && (
                                            <Result
                                                handleNextForm={this.handleNextForm}
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

export default Historico;
