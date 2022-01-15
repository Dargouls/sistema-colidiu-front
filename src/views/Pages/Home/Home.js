import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Row,
    Label
} from "reactstrap";

class Home extends Component {

    render() {
        return (
            <div className="animated fadeIn" style={{marginTop: "40px"}}>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-edit"></i>Tela Inicial
                            </CardHeader>
                            <Collapse isOpen id="collapseExample">
                                <CardBody>
                                    <Form className="form-horizontal">
                                        <div style={{ textAlign: 'justify', padding: 15 }}>
                                            <FormGroup>
                                                <Label>
                                                    <span style={{ fontSize: 25, fontWeight: 'bold' }}>
                                                        Bem vindo ao Colidiu!
                                                    </span>
                                                </Label>
                                                <FormText>
                                                    <p style={{ fontSize: 15 }}>
                                                        Este sistema permite somente o registro de boletins de acidentes que ocasionaram apenas danos materiais, não sendo possível a inserção e cadastro de pessoas feridas.
                                                    </p>
                                                    <p style={{ fontSize: 15 }}>
                                                        Poderão ser registrados acidentes ocorridos no interior de condomínios, postos de combustíveis, estacionamentos de mercados, lojas, shoppings, etc, e o endereço informado no registro do acidente deve ser o mesmo do estabelecimento ou condomínio. Devendo na descrição dos fatos, relatar que o acidente se deu dentro de tal área.
                                                    </p>

                                                </FormText>
                                            </FormGroup>
                                        </div>
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

export default Home;
