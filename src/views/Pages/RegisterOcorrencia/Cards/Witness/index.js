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
  import {estados} from '../../estados'

class Witness extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
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
                          <Input type="text" name="name_witness" placeholder='Digite o nome da Testemunha' required />
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="ccyear">Sexo</Label>
                          <Input type="select" name="sex_witness" >
                            <option>Selecione</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Não informado</option>
                          </Input>
                        </FormGroup>

                        <FormGroup>
                          <Label htmlFor="name">RG</Label>
                          <Input type="text" name="rg_witness" placeholder='Digite o seu RG' required />
                        </FormGroup>

                        <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>

                          <div style={{width: '45%'}}>
                            <FormGroup>
                              <Label htmlFor="name">CPF</Label>
                              <Input type="text" name="cpf_witness" placeholder='Digite o seu CPF' required  />
                            </FormGroup>
                          </div>
                          <div style={{width: '45%'}}>
                            <FormGroup>
                              <Label htmlFor="name">Data de nascimento</Label>
                              <Input type="date" name="birth_date_witness" required />
                            </FormGroup>
                          </div>
                        </div>

                        <Label>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>Endereço do Envolvido</span>
                          </Label>

                          <FormGroup>
                          <Label htmlFor="name">CEP</Label>
                          <Input type="text" name="cep_witnesss" placeholder='Digite o CEP' required />
                        </FormGroup>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            
                            <div style={{width: '45%'}}>

                              <FormGroup>
                                <Label htmlFor="ccyear">UF</Label>
                                <Input type="select" name="uf_witness" placeholder="Selecione o estado">
                                  {estados.UF.map((item) => { 
                                  return <option>{item.nome}</option>
                                  })}
                                </Input>
                              </FormGroup>
                            </div>
                            <div style={{width: '45%'}}>

                            <FormGroup>
                              <Label htmlFor="name">Municipio</Label>
                              <Input type="text" name="municipality_witness" placeholder='Digite o Municipio' required  />
                            </FormGroup>
                            </div>
                          </div>

                          <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>

                        <div style={{width: '80%'}}>
                        <FormGroup>
                          <Label htmlFor="name">Endereço</Label>
                          <Input type="text" name="address_witness" placeholder='Digite o Endereço' required />
                        </FormGroup>
                        </div>    
                        <FormGroup>
                          <Label htmlFor="name">Numero</Label>
                          <Input type="text" name="number_address_witness" placeholder='Digite o número' required />
                        </FormGroup>
                        </div>

                                
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Complemento</Label>
                            <Input type="text" name="complement_address_witness" placeholder='Digite o complemento' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Bairro</Label>
                            <Input type="text" name="district_address_witness" placeholder='Digite o Bairro' required  />
                          </FormGroup>
                          </div>    
                          
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Telefone Celular</Label>
                            <Input type="text" name="phone_witness" placeholder='(82) 99999-9999' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Email</Label>
                            <Input type="text" name="email_witness" placeholder='seuemail@email.com' required />
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
        );
    }
}

export default Witness;
