import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import { toast } from "react-toastify";
import { getUser } from '../../../../../services/auth';
import { estados } from '../../estados'

class Witness extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
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
      isMoreAuthors: "false",
    }
  }

  handleForm() {
    // this.props.handleNextForm
    this.setState({ onchange: true });
    let data = this.props.state;

    if (data.number_occupants === "") {
      return;
    }
    this.props.handleNextForm()
  }

  save() {
    this.props.setState(this.state);
    toast.success("Dados inseridos com successo!")
    this.resetInputs();
  }

  resetInputs() {
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
        {/* <FormGroup>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Label>Caso não exista nenhuma Testemunha(s) ou Envolvido(s) <Link to="#">Clique Aqui</Link></Label>
          </div>
        </FormGroup> */}

        <Label>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>Dados dos Envolvidos</span>
          {!this.props.disabled &&
            <span> (adicione até 5 pessoas além do que foi informado na aba "Veículo e Você")</span>
          }
        </Label>
        {this.props.state.array_witness.map((item, index) => (
          <div key={index} style={{ marginTop: '20px', paddingTop: '30px', borderWidth: 0, borderTopWidth: 3, borderColor: '#c3c3c3', borderStyle: 'dotted', overflow: 'auto', height: 200 }}>
            <FormGroup>
              <Label>Nome da Testemunha</Label>
              <Input
                type="text"
                name="name_witness"
                placeholder='Digite o nome da Testemunha'
                required
                value={item.name_witness}
                disabled

              />
            </FormGroup>

            <FormGroup>
              <Label>Sexo</Label>
              <Input
                type="select"
                name="sex_witness"
                value={item.sex_witness}
                disabled

              >
                <option></option>
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
                value={item.rg_witness}
                disabled

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
                    value={item.cpf_witness}
                    disabled

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
                    value={item.birth_date_witness}
                    disabled

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
                value={item.cep_witnesss}
                disabled

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
                    value={item.uf_witness}
                    disabled

                  >
                    <option></option>
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
                    value={item.municipality_witness}
                    disabled

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
                    value={item.address_witness}
                    disabled

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
                  value={item.number_address_witness}
                  disabled

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
                    value={item.complement_address_witness}
                    disabled

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
                    value={item.district_address_witness}
                    disabled

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
                    value={item.phone_witness}
                    disabled

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
                    value={item.email_witness}
                    disabled
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        ))}

        {!this.props.disabled &&
          <>
            <FormGroup>
              <Label>Possui testemunhas ?</Label>
              <Input
                type="select"
                name="isMoreAuthors"
                onChange={e => this.setState({ isMoreAuthors: e.target.value })}
                value={this.state.isMoreAuthors}
              >
                <option value='false'>Não</option>
                <option value='true'>Sim</option>
              </Input>
            </FormGroup>

            {this.state.isMoreAuthors === 'true' &&
              <>
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
                    <option></option>
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
                        <option></option>
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

                  <Button color="primary" onClick={this.resetInput}>Limpar</Button>
                </div>
              </>
            }
          </>
        }

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="secondary" style={{ marginRight: 10 }} onClick={() => this.props.handlePrevForm()}>Voltar</Button>
          {(getUser().permissions === "all" || !this.props.disabled) &&
            <Button color="primary" onClick={() => this.handleForm()}>Próximo</Button>
          }
        </div>
      </>
    );
  }
}

export default Witness;
