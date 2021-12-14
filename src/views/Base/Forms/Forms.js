import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">            
        <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Registro de ocorrência
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">

                    {/* BEM VINDO */}
                    
                      <FormGroup>
                        <Label>Bem vindo ao Colidiu!</Label>
                        <div className="controls">
                          <FormText>Este sistema permite somente o registro de boletins de acidentes que ocasionaram apenas danos materiais, não sendo possível a inserção e cadastro de pessoas feridas.
                            Poderão ser registrados acidentes ocorridos no interior de condomínios, postos de combustíveis, estacionamentos de mercados, lojas, shoppings, etc, e o endereço informado no registro do acidente deve ser o mesmo do estabelecimento ou condomínio. Devendo na descrição dos fatos, relatar que o acidente se deu dentro de tal área.
                            Observe abaixo os passos do processo de registro do Colidiu: 
                            1º Passo - Insira Dados e receba e-mail de confirmação. 
                            2º Passo - Pague a GR e receba e-mail de confirmação. 
                            3º Passo - Imprima o BATEU e receba e-mail de confirmação.
                          </FormText>
                        </div>
                      </FormGroup>


                    {/* DADOS DO VEICULO */}

                      {/* <FormGroup>
                        <FormGroup>
                        <Label htmlFor="name">Cidade</Label>
                          <Input type="text" id="name" placeholder='Digite o nome da cidade' required />
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Tipo de acidente</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Selecione o tipo de acidente</option>
                            <option>Abalroamento Lateral</option>
                            <option>Abalroamento Transversal</option>
                            <option>Acidente Complexo</option>
                            <option>Atropelamento</option>
                            <option>Atropelamento Animal</option>
                            <option>Capotamento</option>
                            <option>Choque</option>
                            <option>Colisão Frontal</option>
                            <option>Colisão Traseira</option>
                            <option>Engavetamento</option>
                            <option>Incêndio</option>
                            <option>Nâo Identificado</option>
                            <option>Queda de Moto</option>
                            <option>Queda de Objeto</option>
                            <option>Queda de Passageiro</option>
                            <option>Queda de Veículo</option>
                            <option>Tombamento</option>
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Zona</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Selecione o tipo de zona</option>
                            <option>Urbana</option>
                            <option>Rural</option>
                          </Input>
                        </FormGroup>


                      <FormGroup>

                        <Label>Feriado</Label>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Sim</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Não</Label>
                        </FormGroup>
                        </FormGroup>
                      </FormGroup>

                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="file-input">Upload Image</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="file" id="file-input" name="file-input" />
                        </Col>
                      </FormGroup> */}

                      {/* DADOS DO VEICULO */}
                    </Form>
                      <div className="form-actions">
                        <Button type="submit" color="primary">Próximo</Button>
                        <Button color="secondary">Cancelar</Button>
                      </div>
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

export default Forms;
