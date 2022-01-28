import React, { Component } from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table
} from "reactstrap";
import { Link } from 'react-router-dom';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // occurrences: [],
            // loading: false
        }
    }

    // async handleGetOcurrences() {
    //     this.setState({ loading: true })
    //     try {
    //         const { data } = await api.get("/occurrences")
    //         toast.success("Lista de ocorrências carregadas com sucesso!")
    //         this.setState({ occurrences: data.occurrences })
    //         this.setState({ loading: true })
    //     } catch (error) {
    //         toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
    //         this.setState({ loading: true })
    //     }
    // }

    componentDidMount() {
        //Requisição para pegar todas as ocorrências
        // this.handleGetOcurrences()
        console.log("history:", this.props.state)
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>

                    <Table
                        hover
                        responsive
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Veículo</th>
                                <th>Placa</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.state && this.props.state.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.type_vehicle}</td>
                                    <td>{item.plate}</td>
                                    <td>
                                        <Link to={`/ocorrencia/${item.id}`}>
                                            <Button>Visualizar</Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default Result;
