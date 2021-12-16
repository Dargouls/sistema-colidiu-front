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

import { Link } from 'react-router-dom';

import {estados} from './estados';

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
                          <Label htmlFor="name">Nome</Label>
                          <Input type="text" id="name" placeholder='Digite a quantidade de ocupantes' required />
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Sexo</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Não informado</option>
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="name">RG</Label>
                          <Input type="text" id="name" placeholder='Digite o seu RG' required />
                        </FormGroup>


                        <FormGroup>
                          <Label htmlFor="ccyear">UF RG</Label>
                          <Input type="select" name="ccyear" id="ccyear" placeholder="Selecione o estado">
                            {estados.UF.map((item) => { 
                             return <option>{item.nome}</option>
                            })}
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="name">CNH</Label>
                          <Input type="text" id="name" placeholder='Digite o sua CNH' required />
                        </FormGroup>
                        <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', width: '70%'}}>

                          <FormGroup>
                            <Label htmlFor="name">CPF</Label>
                            <Input type="text" id="name" placeholder='Digite o seu CPF' required />
                          </FormGroup>

                          <FormGroup>
                            <Label htmlFor="name">Data</Label>
                            <Input type="date" id="name" required />
                          </FormGroup>

                        </div>

                        <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Endereço</span>
                          </Label>

                        <FormGroup>
                          <Label htmlFor="name">CEP</Label>
                          <Input type="text" id="name" placeholder='Digite o CEP' required />
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="name">UF</Label>
                          <Input type="text" id="name" placeholder='Digite o Estado' required />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="name">Municipio</Label>
                          <Input type="text" id="name" placeholder='Digite o Municipio' required />
                        </FormGroup>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

                        <div style={{width: '80%'}}>
                        <FormGroup>
                          <Label htmlFor="name">Endereço</Label>
                          <Input type="text" id="name" placeholder='Digite o Endereço' required />
                        </FormGroup>
                        </div>    
                        <FormGroup>
                          <Label htmlFor="name">Numero</Label>
                          <Input type="text" id="name" placeholder='Digite o número' required />
                        </FormGroup>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Complemento</Label>
                            <Input type="text" id="name" placeholder='Digite o complemento' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Bairro</Label>
                            <Input type="text" id="name" placeholder='Digite o Bairro' required />
                          </FormGroup>
                          </div>    
                          
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Telefone Celular</Label>
                            <Input type="text" id="name" placeholder='(82) 99999-9999' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Email</Label>
                            <Input type="text" id="name" placeholder='seuemail@email.com' required />
                          </FormGroup>
                          </div>    
                          
                        </div>
                        

                            
                        </>
                        

                        
                      }

                      {this.state.forms == 4 && 
                        <>
                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Dados dos demais Veículos (adicione até 3 veículos com exceção do que foi informado na aba "Veículo e Você")</span>
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
                        
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

                        <div style={{width: '45%'}}>

                        <FormGroup>
                          <Label htmlFor="ccyear">Cor</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>BRANCO</option>
                            <option>PRETO</option>
                            <option>CINZA</option>
                          </Input>
                        </FormGroup>
                        </div>
                        
                          <div style={{width: '45%'}}>

                          <FormGroup>
                            <Label htmlFor="name">Marca/Modelo</Label>
                            <Input type="text" id="name" placeholder='Digite a marca/modelo' required />
                          </FormGroup>
                          </div>
                        
                        </div>


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


                        <FormGroup>
                          <Label htmlFor="ccyear">Transportava carga?</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Bruta</option>
                            <option>Granel</option>
                            <option>Não</option>
                            <option>Perigosa</option>
                            <option>Viva</option>
                          </Input>
                        </FormGroup>

                        <Label>
                          <span style={{fontSize: 20, fontWeight: 'bold'}}>Dados do Condutor / Responsável</span>
                          <span> (O preenchimento destes campos não são obrigatórios)</span>
                        </Label>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

                          <div style={{width: '45%'}}>

                          <FormGroup>
                              <Label htmlFor="name">Nome</Label>
                              <Input type="text" id="name" placeholder='Digite nome' required />
                            </FormGroup>
                          </div>

                            <div style={{width: '45%'}}>

                            <FormGroup>
                              <Label htmlFor="name">CPF</Label>
                              <Input type="text" id="name" placeholder='Digite o CPF' required />
                            </FormGroup>
                            </div>

                          </div>

                          <FormGroup>
                            <Label htmlFor="ccyear">Sexo</Label>
                            <Input type="select" name="ccyear" id="ccyear">
                              <option>Masculino</option>
                              <option>Feminino</option>
                              <option>Não informado</option>
                            </Input>
                          </FormGroup>

                          <FormGroup>
                            <Label htmlFor="name">CNH</Label>
                            <Input type="text" id="name" placeholder='Digite o sua CNH' required />
                          </FormGroup>

                          <FormGroup>
                            <Label htmlFor="name">RG</Label>
                            <Input type="text" id="name" placeholder='Digite o seu RG' required />
                          </FormGroup>


                          <FormGroup>
                          <Label htmlFor="ccyear">UF RG</Label>
                          <Input type="select" name="ccyear" id="ccyear" placeholder="Selecione o estado">
                            {estados.UF.map((item) => { 
                             return <option>{item.nome}</option>
                            })}
                          </Input>
                        </FormGroup>

                        
                     
                            
                          <FormGroup check className="radio">
                            <Input className="form-check-input" type="checkbox" id="checkbox1" name="radios" value="option1" />
                            <Label>Não houve a possibilidade de coletar dados do condutor </Label>
                          </FormGroup>
                          
                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Endereço do Condutor / Responsável</span>
                            <span> (O preenchimento destes campos não são obrigatórios)</span>
                          </Label>

                          <FormGroup>
                            <Label htmlFor="name">CEP</Label>
                            <Input type="text" id="name" placeholder='Digite o CEP' required />
                          </FormGroup>


                          <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            
                            <div style={{width: '45%'}}>

                              <FormGroup>
                                <Label htmlFor="ccyear">UF</Label>
                                <Input type="select" name="ccyear" id="ccyear" placeholder="Selecione o estado">
                                  {estados.UF.map((item) => { 
                                  return <option>{item.nome}</option>
                                  })}
                                </Input>
                              </FormGroup>
                            </div>
                            <div style={{width: '45%'}}>

                            <FormGroup>
                              <Label htmlFor="name">Municipio</Label>
                              <Input type="text" id="name" placeholder='Digite o Municipio' required />
                            </FormGroup>
                            </div>
                          </div>

                          <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

                            <div style={{width: '70%'}}>
                            <FormGroup>
                              <Label htmlFor="name">Endereço</Label>
                              <Input type="text" id="name" placeholder='Digite o Endereço' required />
                            </FormGroup>
                            </div>    
                            <FormGroup>
                              <Label htmlFor="name">Numero</Label>
                              <Input type="text" id="name" placeholder='Digite o número' required />
                            </FormGroup>
                          </div>

                          <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Complemento</Label>
                            <Input type="text" id="name" placeholder='Digite o complemento' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Bairro</Label>
                            <Input type="text" id="name" placeholder='Digite o Bairro' required />
                          </FormGroup>
                          </div>    
                          
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Telefone Celular</Label>
                            <Input type="text" id="name" placeholder='(82) 99999-9999' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Email</Label>
                            <Input type="text" id="name" placeholder='seuemail@email.com' required />
                          </FormGroup>
                          </div>    
                          
                        </div>

                          <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '5%'}}>
                          <div style={{marginRight: '5%'}}>
                            <Button  color="primary" >Adicionar Veíuculo</Button>
                          </div>  
                        
                        <Button  color="primary" >Limpar</Button>
                          
                        </div>
                        </>
                        
                      }

                      {this.state.forms === 5 &&
                        <>
                          <FormGroup>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Label>Caso não exista nenhuma Testemunha(s) ou Envolvido(s) <Link to="#">Clique Aqui</Link></Label>
                            </div>
                          </FormGroup>

                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Dados dos Envolvidos</span>
                            <span> (adicione até 5 pessoas além do que foi informado na aba "Veículo e Você")</span>
                          </Label>

                          <FormGroup>
                          <Label htmlFor="name">Nome da Testemunha</Label>
                          <Input type="text" id="name" placeholder='Digite o nome da Testemunha' required />
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Sexo</Label>
                          <Input type="select" name="ccyear" id="ccyear">
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Não informado</option>
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="name">RG</Label>
                          <Input type="text" id="name" placeholder='Digite o seu RG' required />
                        </FormGroup>

                        <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>

                          <div style={{width: '45%'}}>
                            <FormGroup>
                              <Label htmlFor="name">CPF</Label>
                              <Input type="text" id="name" placeholder='Digite o seu CPF' required />
                            </FormGroup>
                          </div>
                          <div style={{width: '45%'}}>
                            <FormGroup>
                              <Label htmlFor="name">Data</Label>
                              <Input type="date" id="name" required />
                            </FormGroup>
                          </div>

                        </div>



                        <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Endereço do Envolvido</span>
                          </Label>

                          <FormGroup>
                          <Label htmlFor="name">CEP</Label>
                          <Input type="text" id="name" placeholder='Digite o CEP' required />
                        </FormGroup>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            
                            <div style={{width: '45%'}}>

                              <FormGroup>
                                <Label htmlFor="ccyear">UF</Label>
                                <Input type="select" name="ccyear" id="ccyear" placeholder="Selecione o estado">
                                  {estados.UF.map((item) => { 
                                  return <option>{item.nome}</option>
                                  })}
                                </Input>
                              </FormGroup>
                            </div>
                            <div style={{width: '45%'}}>

                            <FormGroup>
                              <Label htmlFor="name">Municipio</Label>
                              <Input type="text" id="name" placeholder='Digite o Municipio' required />
                            </FormGroup>
                            </div>
                          </div>

                          <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

                        <div style={{width: '80%'}}>
                        <FormGroup>
                          <Label htmlFor="name">Endereço</Label>
                          <Input type="text" id="name" placeholder='Digite o Endereço' required />
                        </FormGroup>
                        </div>    
                        <FormGroup>
                          <Label htmlFor="name">Numero</Label>
                          <Input type="text" id="name" placeholder='Digite o número' required />
                        </FormGroup>
                        </div>

                                
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Complemento</Label>
                            <Input type="text" id="name" placeholder='Digite o complemento' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Bairro</Label>
                            <Input type="text" id="name" placeholder='Digite o Bairro' required />
                          </FormGroup>
                          </div>    
                          
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Telefone Celular</Label>
                            <Input type="text" id="name" placeholder='(82) 99999-9999' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Email</Label>
                            <Input type="text" id="name" placeholder='seuemail@email.com' required />
                          </FormGroup>
                          </div>    
                          
                        </div>


                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '5%'}}>
                          <div style={{marginRight: '5%'}}>
                            <Button  color="primary" >Adicionar Testemunha</Button>
                          </div>  
                        
                        <Button  color="primary" >Limpar</Button>
                          
                        </div>
                        
                        </>
                      }

                      {this.state.forms === 6 && 
                        <>
                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Atenção</span>
                          </Label>

                          <p>Antes de clicar em concluir confira todos os dados cadastrados neste BATEU navegando pelas ABAS/JANELAS anteriores. Caso necessário, realize as alterações ou complementações necessárias.</p>

                          <p>Após a conferência dos dados cadastrados ASSINALE a confirmação da veracidade das informações prestadas e clique em CONCLUIR para emitir a Guia de Recolhimento (GR).</p>

                          <div style={{color: 'red', display: 'flex', flexDirection: 'column'}}>
                            <span>Importante!</span>

                            <span>Ao clicar em CANCELAR, todos os dados do registro serão excluidos do sistema, retornando assim á tela inicial.</span>
                          </div>
                          <FormGroup>

                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Resumo da Ocorrência</span>
                          </Label>
                          </FormGroup>
                          
                          <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Dados da Pessoa e do Veículo</span>
                          </Label>

                          
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
