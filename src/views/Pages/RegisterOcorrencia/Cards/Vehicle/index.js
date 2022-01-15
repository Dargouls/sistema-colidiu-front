import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  FormFeedback,

} from "reactstrap";

import { estados } from "../../estados";
import { toast } from "react-toastify";

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.handleWarning = this.handleWarning.bind(this);

    // this.handleNextForm = this.props.handleNextForm(this);
    this.state = {
      onchange: false,
    };
  }

  handleForm() {
    // this.props.handleNextForm
    this.setState({ onchange: true });
    let data = this.props.state;

    //adicioanr os dados
    if (data.type_vehicle === "") {
      this.handleWarning("type_vehicle");
      return;
    }
    if (data.number_occupants === "") {
      this.handleWarning("number_occupants");
      return;
    }
    if (data.state_vehicle === "") {
      this.handleWarning("state_vehicle");
      return;
    }
    if (data.category_vehicle === "") {
      this.handleWarning("category_vehicle");
      return;
    }
    if (data.category_vehicle === "") {
      this.handleWarning("category_vehicle");
      return;
    }
    if (data.safe_vehicle === "") {
      this.handleWarning("safe_vehicle");
      return;
    }
    if (data.plate === "") {
      this.handleWarning("plate");
      return;
    }
    if (data.renavam === "") {
      this.handleWarning("renavam");
      return;
    }
    if (data.pellicle === "") {
      this.handleWarning("pellicle");
      return;
    }
    if (data.airbag === "") {
      this.handleWarning("airbag");
      return;
    }
    if (data.name === "") {
      this.handleWarning("name");
      return;
    }
    if (data.sex === "") {
      this.handleWarning("sex");
      return;
    }
    if (data.rg === "") {
      this.handleWarning("rg");
      return;
    }
    if (data.uf_rg === "") {
      this.handleWarning("uf_rg");
      return;
    }
    if (data.cnh === "") {
      this.handleWarning("cnh");
      return;
    }
    if (data.cpf === "") {
      this.handleWarning("cpf");
      return;
    }
    if (data.birth_date === "") {
      this.handleWarning("birth_date");
      return;
    }
    if (data.cep === "") {
      this.handleWarning("cep");
      return;
    }
    if (data.uf === "") {
      this.handleWarning("cep");
      return;
    }
    if (data.municipality === "") {
      this.handleWarning("municipality");
      return;
    }
    if (data.address === "") {
      this.handleWarning("address");
      return;
    }
    if (data.number_address === "") {
      this.handleWarning("number_address");
      return;
    }
    if (data.complement_address === "") {
      this.handleWarning("complement_address");
      return;
    }
    if (data.district === "") {
      this.handleWarning("district");
      return;
    }
    if (data.phone === "") {
      this.handleWarning("phone");
      return;
    }
    if (data.email === "") {
      this.handleWarning("email");
      return;
    }

    this.props.handleNextForm();
  }

  handleWarning(type) {
    const names = {
      type_vehicle: "Tipo de veículo",
      number_occupants: "Número de ocupantes",
      state_vehicle: "Estado do veículo",
      category_vehicle: "Categoria do veículo",
      safe_vehicle: "Seguro do veículo",
      plate: "Placa",
      renavam: "RENAVAM",
      pellicle: "Película do Veículo",
      airbag: "Possui Airbag?",
      plate: "Placa",
      name: "Seu nome",
      sex: "Seu sexo",
      rg: "Seu RG",
      uf_rg: "Estado do RG",
      cnh: "Número da CNH",
      cpf: "Seu CPF",
      birth_date: "Data de nascimento",
      cep: "Seu CEP",
      uf: "Seu estado",
      municipality: "Seu municipío",
      address: "Seu endereço",
      number_address: "O número do endereço",
      complement_address: "Complemento do endeço",
      district: "O bairro",
      phone: "O telefone",
      email: "O e-mail",
    };

    toast.warn(`${names[type]} é obrigatório`);
  }

  render() {
    return (
      <Form>
        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>
            Dados do veículo
          </span>
        </Label>
        <FormGroup>
          <Label>Tipo de veículo</Label>
          <Input
            type="select"
            name="type_vehicle"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.type_vehicle}
            invalid={
              this.props.state.type_vehicle === "" && this.state.onchange
            }
          >
            <option></option>
            <option>Automóvel</option>
            <option>Bicicleta</option>
            <option>Caminhão</option>
            <option>Charrete</option>
            <option>Motocicleta</option>
            <option>Patinete</option>
            <option>Patins</option>
            <option>Ônibus</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Número de ocupantes</Label>
          <Input
            invalid={
              this.props.state.number_occupants === "" && this.state.onchange
            }
            type="text"
            name="number_occupants"
            placeholder="Digite a quantidade de ocupantes"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.number_occupants}
          />
          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Veículo no momento do ato</Label>
          <Input
            type="select"
            name="state_vehicle"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.state_vehicle}
            invalid={
              this.props.state.state_vehicle === "" && this.state.onchange
            }
          >
            <option></option>
            <option>Estacionado</option>
            <option>Movimento</option>
            <option>Parado</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Categoria</Label>
          <Input
            type="select"
            name="category_vehicle"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.category_vehicle}
            invalid={
              this.props.state.category_vehicle === "" && this.state.onchange
            }
          >
            <option></option>
            <option>Aluguel</option>
            <option>Particular</option>
            <option>Parado</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Possui seguro?</Label>
          <Input
            type="select"
            name="safe_vehicle"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.safe_vehicle}
            invalid={
              this.props.state.safe_vehicle === "" && this.state.onchange
            }
          >
            <option></option>
            <option>Sim</option>
            <option>Não</option>
            <option>Não informado</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Placa</Label>
          <Input
            type="text"
            name="plate"
            placeholder="Digite a placa do veículo"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.plate}
            invalid={
              this.props.state.plate === "" && this.state.onchange
            }
          />
          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Renavam</Label>
          <Input
            type="text"
            name="renavam"
            placeholder="Digite o RENAVAM do veículo"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.renavam}
            invalid={
              this.props.state.renavam === "" && this.state.onchange
            }
          />
          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Possui Pelicula?</Label>
          <Input
            type="select"
            name="pellicle"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.pellicle}
            invalid={
              this.props.state.pellicle === "" && this.state.onchange
            }
          >
            <option></option>
            <option>Sim</option>
            <option>Não</option>
          </Input>
          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Acionou o Airbag?</Label>
          <Input
            type="select"
            name="airbag"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.airbag}
            invalid={
              this.props.state.airbag === "" && this.state.onchange
            }
          >
            <option></option>
            <option>Sim</option>
            <option>Não</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Seus dados</span>
        </Label>

        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            placeholder="Digite o seu name"
            required
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.name}
            invalid={this.props.state.name === "" && this.state.onchange}
          />

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Sexo</Label>
          <Input
            type="select"
            name="sex"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.sex}
            invalid={this.props.state.sex === "" && this.state.onchange}
          >
            <option></option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não informado</option>
          </Input>

          <FormFeedback>Selecione o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>RG</Label>
          <Input
            type="text"
            name="rg"
            placeholder="Digite o seu RG"
            required
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.rg}
            invalid={this.props.state.rg === "" && this.state.onchange}
          />

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>UF RG</Label>
          <Input
            type="select"
            name="uf_rg"
            placeholder="Selecione o estado"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.uf_rg}
            invalid={this.props.state.uf_rg === "" && this.state.onchange}
          >
            <option></option>
            {estados.UF.map((item, index) => {
              return <option key={index}>{item.nome}</option>;
            })}
          </Input>

          <FormFeedback>Selecione o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>CNH</Label>
          <Input
            type="text"
            name="cnh"
            placeholder="Digite o sua CNH"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.cnh}
            invalid={this.props.state.cnh === "" && this.state.onchange}
          />

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <FormGroup>
            <Label>CPF</Label>
            <Input
              type="text"
              name="cpf"
              placeholder="Digite o sua cpf"
              required
              onChange={this.props.onChange}
              disabled={this.props.disabled}
              value={this.props.state.cpf}
              invalid={this.props.state.cpf === "" && this.state.onchange}
            />

            <FormFeedback>Preencha o campo!</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>Data de nascimento</Label>
            <Input
              type="date"
              name="birth_date"
              onChange={this.props.onChange}
              disabled={this.props.disabled}
              value={this.props.state.birth_date}
              invalid={
                this.props.state.birth_date === "" && this.state.onchange
              }
            />

            <FormFeedback>Preencha o campo!</FormFeedback>
          </FormGroup>
        </div>

        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Endereço</span>
        </Label>

        <FormGroup>
          <Label>CEP</Label>
          <Input
            type="text"
            name="cep"
            placeholder="Digite o CEP"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.cep}
            invalid={this.props.state.cep === "" && this.state.onchange}
          />

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>UF</Label>
          <Input
            type="text"
            name="uf"
            placeholder="Digite o Estado"
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.uf}
            invalid={this.props.state.uf === "" && this.state.onchange}
          />

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Municipio</Label>
          <Input
            type="text"
            name="municipality"
            placeholder="Digite o Municipio"
            required
            onChange={this.props.onChange}
            disabled={this.props.disabled}
            value={this.props.state.municipality}
            invalid={
              this.props.state.municipality === "" && this.state.onchange
            }
          />

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "80%" }}>
            <FormGroup>
              <Label>Endereço</Label>
              <Input
                type="text"
                name="address"
                placeholder="Digite o Endereço"
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.address}
                invalid={this.props.state.address === "" && this.state.onchange}
              />

              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Numero</Label>
            <Input
              type="text"
              name="number_address"
              placeholder="Digite o número"
              onChange={this.props.onChange}
              disabled={this.props.disabled}
              value={this.props.state.number_address}
              invalid={
                this.props.state.number_address === "" && this.state.onchange
              }
            />
            <FormFeedback>Preencha o campo!</FormFeedback>
          </FormGroup>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "45%" }}>
            <FormGroup>
              <Label>Complemento</Label>
              <Input
                type="text"
                name="complement_address"
                placeholder="Digite o complemento"
                required
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.complement_address}
                invalid={
                  this.props.state.complement_address === "" &&
                  this.state.onchange
                }
              />
              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>

          <div style={{ width: "45%" }}>
            <FormGroup>
              <Label>Bairro</Label>
              <Input
                type="text"
                name="district"
                placeholder="Digite o Bairro"
                required
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.district}
                invalid={
                  this.props.state.district === "" && this.state.onchange
                }
              />
              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "45%" }}>
            <FormGroup>
              <Label>Telefone Celular</Label>
              <Input
                type="text"
                name="phone"
                placeholder="(82) 99999-9999"
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.phone}
                invalid={this.props.state.phone === "" && this.state.onchange}
              />

              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>

          <div style={{ width: "45%" }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                placeholder="seuemail@email.com"
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.email}
                invalid={this.props.state.email === "" && this.state.onchange}
              />
              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>

          <Button
            color="secondary"
            style={{ marginRight: 10 }}
          >
            Voltar
          </Button>
          <Button color="primary" onClick={() => this.handleForm()}>
            Próximo
          </Button>
        </div>
      </Form>
    );
  }
}

export default Vehicle;
