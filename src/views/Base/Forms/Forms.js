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
      timeout: 300,
      forms: 1
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleNextForm(){
    this.setState((prevState) => {return { forms: prevState.forms + 1} })
  }
  handlePrevForm(){
    this.setState((prevState) => {
      if(this.state.forms >=2){
        return { forms: prevState.forms - 1} 
      }else {
        console.log("Não volta!!!!")
        return;
      }
    })
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
                    
                    {this.state.forms === 1 && 
                      <div style={{textAlign: 'justify', padding: 15}}>
                      <FormGroup>
                        <Label>
                          <span style={{fontSize: 25, fontWeight: 'bold'}}>
                            Bem vindo ao Colidiu!
                          </span>
                          </Label>
                          <FormText>

                            <p style={{fontSize: 15}}>
                            Este sistema permite somente o registro de boletins de acidentes que ocasionaram apenas danos materiais, não sendo possível a inserção e cadastro de pessoas feridas.
                            </p>
                            <p style={{fontSize: 15}}>
                            Poderão ser registrados acidentes ocorridos no interior de condomínios, postos de combustíveis, estacionamentos de mercados, lojas, shoppings, etc, e o endereço informado no registro do acidente deve ser o mesmo do estabelecimento ou condomínio. Devendo na descrição dos fatos, relatar que o acidente se deu dentro de tal área.
                            </p>
                            <p style={{fontSize: 15}}>
                            Observe abaixo os passos do processo de registro do Colidiu:
                            </p>

                            <p style={{fontSize: 15}}>
                            1º Passo - Insira Dados e receba e-mail de confirmação.
                            </p>

                            <p style={{fontSize: 15}}>
                            2º Passo - Pague a GR e receba e-mail de confirmação.
                            </p>

                            <p style={{fontSize: 15}}>
                            3º Passo - Imprima o e receba e-mail de confirmação.`
                            </p>
                          
                          </FormText>
                      </FormGroup>
                        </div>
                    }


                    {this.state.forms === 2 &&

                      <>
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
                          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 200}}>

                          <FormGroup check className="radio">
                            <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                            <Label check className="form-check-label" htmlFor="radio1">Sim</Label>
                          </FormGroup>
                          <FormGroup check className="radio">
                            <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                            <Label check className="form-check-label" htmlFor="radio2">Não</Label>
                          </FormGroup>
                          </div>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="file-input">Upload Image</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="file" id="file-input" name="file-input" />
                          </Col>
                        </FormGroup>
                       
                        </FormGroup>
                      </>
                    }

                      {this.state.forms === 3 && 
                        <>

                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Dados do veículo</span>
                          </Label>
                          <FormGroup>
                          <Label htmlFor="ccyear">Tipo de veículo</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Automóvel</option>
                            <option>Bicicleta</option>
                            <option>Caminhão</option>
                            <option>Charrete</option>
                            <option>Motocicleta</option>
                            <option>Patinete</option>
                            <option>Patins</option>
                            <option>Ônibus</option>
                          </Input>
                        </FormGroup>


                        <FormGroup>
                          <Label htmlFor="name">Número de ocupantes</Label>
                          <Input type="text" id="name" placeholder='Digite a quantidade de ocupantes' required />
                        </FormGroup>


                        <FormGroup>
                          <Label htmlFor="ccyear">Veículo no momento do ato</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Estacionado</option>
                            <option>Movimento</option>
                            <option>Parado</option>
                            
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Categoria</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Aluguel</option>
                            <option>Particular</option>
                            <option>Parado</option>
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Possui seguro?</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Sim</option>
                            <option>Não</option>
                            <option>Não informado</option>
                          </Input>
                        </FormGroup>



                        <Label>
                          <span style={{fontSize: 20, fontWeight: 'bold'}}>Seus dados</span>
                        </Label>
                      
                        <FormGroup>
                        <Label htmlFor="ccyear">Nome</Label>
                        <Input type="select" name="ccyear" id="ccyear">
                          <option>Aluguel</option>
                          <option>Particular</option>
                          <option>Parado</option>
                        </Input>
                        </FormGroup>
                        </>

                        
                      }


                      <div className="form-actions" style={{justifyContent: 'flex-end', display: 'flex'}}>
                        {this.state.forms >= 2 &&
                          <Button color="secondary" style={{marginRight: 10}} onClick={() => this.handlePrevForm()}>Voltar</Button>
                        }
                        <Button  color="primary" onClick={() => this.handleNextForm()}>Próximo</Button>
                      </div>
                    </Form>
                    
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
