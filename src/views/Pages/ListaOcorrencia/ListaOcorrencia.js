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
    Label,
    Table,
    Input,
    FormGroup
} from "reactstrap";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { api } from "../../../services/api";

import { generatePDF } from '../../../utils/pdf'

class Validation extends Component {
    constructor(props) {
        super(props);
        this.filterOcccurences = this.filterOcccurences.bind(this);
        this.printOccurrence = this.printOccurrence.bind(this);
        this.state = {
            occurrences: [],
            filterOccurences: [],
            selectOccurence: "Pendente",
            loading: false
        }
    }

    async handleGetOcurrences() {
        this.setState({ loading: true })
        try {
            const { data } = await api.get("/occurrences")
            toast.success("Lista de ocorrências carregadas com sucesso!")
            console.log(data.occurrences)
            this.filterOcccurences(this.state.selectOccurence, data.occurrences)
            this.setState({ occurrences: data.occurrences })
            this.setState({ loading: true })
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
            this.setState({ loading: true })
        }
    }

    filterOcccurences(select, data) {
        let newList = data.filter((item) => {
            if (item.status === select) {
                return item;
            }
        })
        console.log('filter:', newList)
        this.setState({ filterOccurences: newList })
    }

    printOccurrence(occurrence) {
        console.log('occurrence:', occurrence)
        generatePDF(occurrence);
    }

    componentDidMount() {
        //Requisição para pegar todas as ocorrências
        this.handleGetOcurrences();
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-edit"></i>Lista de ocorrências
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Selecione um status das ocorrências:</Label>
                                    <Input
                                        name="select_occurrence"
                                        type="select"
                                        onChange={(e) => {
                                            this.setState({ selectOccurence: e.target.value })
                                            this.filterOcccurences(e.target.value, this.state.occurrences)
                                        }}
                                        value={this.state.selectOccurence}
                                    >
                                        <option value="Pendente">Pendente</option>
                                        <option value="Aprovado">Aprovado</option>
                                        <option value="Reprovado">Reprovado</option>
                                    </Input>
                                </FormGroup>

                                <Table
                                    hover
                                    responsive
                                >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nome</th>
                                            <th>Status</th>
                                            <th style={{ textAlign: 'center' }}>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.filterOccurences && this.state.filterOccurences.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.status}</td>
                                                <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Link to={`/ocorrencia/${item.id}`}>
                                                        <Button>{item.status === "Pendente" ? "Validar" : "Editar"}</Button>
                                                    </Link>
                                                    {(item.status === "Aprovado" || item.status === "Reprovado") &&
                                                        <Button
                                                            style={{ marginLeft: 10 }}
                                                            onClick={() => this.printOccurrence(item)}
                                                        >
                                                            Imprimir
                                                        </Button>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                        {(this.state.occurrences && this.state.filterOccurences.length === 0) &&
                                            <span>Nenhum ocorrencia encontrada!</span>
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                            {/* </Collapse> */}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Validation;
