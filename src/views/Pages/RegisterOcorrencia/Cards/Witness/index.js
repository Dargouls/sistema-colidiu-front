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
import { estados } from '../../estados'

class Witness extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.save = this.save.bind(this);
    this.state = {
      name_witness: '',
      sex_witness: '',
      rg_witness: '',
      cpf_witness: '',
      birth_date_witness: '',
      cep_witnesss: '',
      uf_witness: '',
      municipality_witness: '',
      address_witness: '',
      number_address_witness: '',
      complement_address_witness: '',
      district_address_witness: '',
      phone_witness: '',
      email_witness: '',
    }
  }

  save(){
    this.props.setState(this.state);
    this.resetInputs();
  }

  resetInputs(){
    this.setState(
      {
        name_witness: '',
        sex_witness: '',
        rg_witness: '',
        cpf_witness: '',
        birth_date_witness: '',
        cep_witnesss: '',
        uf_witness: '',
        municipality_witness: '',
        address_witness: '',
        number_address_witness: '',
        complement_address_witness: '',
        district_address_witness: '',
        phone_witness: '',
        email_witness: '',
      }
    )
  }

  handleInputChange(e) {
    console.log(`Campo: ${e.target.name} || ${e.target.value}`)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <>
        <FormGroup>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Label>Caso não exista nenhuma Testemunha(s) ou Envolvido(s) <Link to="#">Clique Aqui</Link></Label>
          </div>
        </FormGroup>

        <Label>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>Dados dos Envolvidos</span>
          <span> (adicione até 5 pessoas além do que foi informado na aba "Veículo e Você")</span>
        </Label>

        <FormGroup>
          <Label>Nome da Testemunha</Label>
          <Input
            type="text"
            name="name_witness"
            placeholder='Digite o nome da Testemunha'
            required
            value={this.state.name_witness}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Sexo</Label>
          <Input
            type="select"
            name="sex_witness"
            value={this.state.sex_witness}
            onChange={this.handleInputChange}
          >
            <option>Selecione</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não informado</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>RG</Label>
          <Input
            type="text"
            name="rg_witness"
            placeholder='Digite o seu RG'
            required
            value={this.state.rg_witness}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>

          <div style={{ width: '45%' }}>
            <FormGroup>
              <Label>CPF</Label>
              <Input
                type="text"
                name="cpf_witness"
                placeholder='Digite o seu CPF'
                required
                value={this.state.cpf_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
          <div style={{ width: '45%' }}>
            <FormGroup>
              <Label>Data de nascimento</Label>
              <Input
                type="date"
                name="birth_date_witness"
                required
                value={this.state.birth_date_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
        </div>

        <Label>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>Endereço do Envolvido</span>
        </Label>

        <FormGroup>
          <Label>CEP</Label>
          <Input
            type="text"
            name="cep_witnesss"
            placeholder='Digite o CEP'
            required
            value={this.state.cep_witnesss}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

          <div style={{ width: '45%' }}>

            <FormGroup>
              <Label>UF</Label>
              <Input
                type="select"
                name="uf_witness"
                placeholder="Selecione o estado"
                value={this.state.uf_witness}
                onChange={this.handleInputChange}
              >
                {estados.UF.map((item, index) => {
                  return <option key={index}>{item.nome}</option>
                })}
              </Input>
            </FormGroup>
          </div>
          <div style={{ width: '45%' }}>

            <FormGroup>
              <Label>Municipio</Label>
              <Input
                type="text"
                name="municipality_witness"
                placeholder='Digite o Municipio'
                required
                value={this.state.municipality_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

          <div style={{ width: '80%' }}>
            <FormGroup>
              <Label>Endereço</Label>
              <Input
                type="text"
                name="address_witness"
                placeholder='Digite o Endereço'
                required
                value={this.state.address_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Numero</Label>
            <Input
              type="text"
              name="number_address_witness"
              placeholder='Digite o número'
              required
              value={this.state.number_address_witness}
              onChange={this.handleInputChange}
            />
          </FormGroup>
        </div>


        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

          <div style={{ width: '45%' }}>
            <FormGroup>
              <Label>Complemento</Label>
              <Input
                type="text"
                name="complement_address_witness"
                placeholder='Digite o complemento'
                required
                value={this.state.complement_address_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>

          <div style={{ width: '45%' }}>
            <FormGroup>
              <Label>Bairro</Label>
              <Input
                type="text"
                name="district_address_witness"
                placeholder='Digite o Bairro'
                required
                value={this.state.district_address_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

          <div style={{ width: '45%' }}>
            <FormGroup>
              <Label>Telefone Celular</Label>
              <Input
                type="text"
                name="phone_witness"
                placeholder='(82) 99999-9999'
                required
                value={this.state.phone_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>

          <div style={{ width: '45%' }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="email_witness"
                placeholder='seuemail@email.com'
                required
                value={this.state.email_witness}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '5%' }}>
          <div style={{ marginRight: '5%' }}>
            <Button
              color="primary"
              onClick={this.save}
            >
              Adicionar Testemunha
            </Button>
          </div>

          <Button color="primary" >Limpar</Button>
        </div>
      </>
    );
  }
}

export default Witness;
