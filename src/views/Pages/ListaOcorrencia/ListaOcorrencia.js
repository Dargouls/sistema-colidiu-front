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
    Table
} from "reactstrap";
import { irect, Route, Switch, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { api } from "../../../services/api";

class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrences: [],
            loading: false
        }
    }

    async handleGetOcurrences() {
        this.setState({ loading: true })
        try {
            const { data } = await api.get("/occurrences")
            toast.success("Lista de ocorrências carregadas com sucesso!")
            this.setState({ occurrences: data.occurrences })
            this.setState({ loading: true })
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
            this.setState({ loading: true })
        }
    }

    componentDidMount() {
        //Requisição para pegar todas as ocorrências
        this.handleGetOcurrences()
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
                            {/* <Collapse isOpen={this.state.collapse} id="collapseExample"> */}
                            <CardBody>
                                <Table
                                    hover
                                    responsive
                                >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nome</th>
                                            <th>Status</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.occurrences && this.state.occurrences.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <Link to={`/ocorrencia/${item.id}`}>
                                                        <Button>Validar</Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
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
