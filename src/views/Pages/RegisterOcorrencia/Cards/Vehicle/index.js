import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import InputMask from "react-input-mask";
import { estados } from "../../estados";
import { toast } from "react-toastify";

import "../styles.css";
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
    // if (data.complement_address === "") {
    //   this.handleWarning("complement_address");
    //   return;
    // }
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
      type_vehicle: "Tipo de ve??culo",
      number_occupants: "N??mero de ocupantes",
      state_vehicle: "Estado do ve??culo",
      category_vehicle: "Categoria do ve??culo",
      safe_vehicle: "Seguro do ve??culo",
      plate: "Placa",
      renavam: "RENAVAM",
      pellicle: "Pel??cula do Ve??culo",
      airbag: "Possui Airbag?",
      plate: "Placa",
      name: "Seu nome",
      sex: "Seu sexo",
      rg: "Seu RG",
      uf_rg: "Estado do RG",
      cnh: "N??mero da CNH",
      cpf: "Seu CPF",
      birth_date: "Data de nascimento",
      cep: "Seu CEP",
      uf: "Seu estado",
      municipality: "Seu municip??o",
      address: "Seu endere??o",
      number_address: "O n??mero do endere??o",
      // complement_address: "Complemento do ende??o",
      district: "O bairro",
      phone: "O telefone",
      email: "O e-mail",
    };

    toast.warn(`${names[type]} ?? obrigat??rio`);
  }

  render() {
    const vehiclesArray = ["Autom??vel", "Motocicleta", "??nibus"];

    return (
      <Form>
        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>
            Dados do ve??culo
          </span>
        </Label>
        <FormGroup>
          <Label>Tipo de ve??culo</Label>
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
            <option>Autom??vel</option>
            <option>Bicicleta</option>
            <option>Motocicleta</option>
            <option>??nibus</option>
            <option>Outros</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>N??mero de ocupantes</Label>
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
          <Label>Ve??culo no momento do ato</Label>
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
            <option>N??o</option>
            <option>N??o informado</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>
        {vehiclesArray.some((item) =>
          this.props?.state.type_vehicle?.includes(item)
        ) && (
          <>
            <FormGroup>
              <Label>Placa</Label>
              <Input
                type="text"
                name="plate"
                placeholder="Digite a placa do ve??culo"
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.plate}
                invalid={this.props.state.plate === "" && this.state.onchange}
              />
              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Renavam</Label>
              <Input
                type="text"
                name="renavam"
                placeholder="Digite o RENAVAM do ve??culo"
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.renavam}
                invalid={this.props.state.renavam === "" && this.state.onchange}
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
                <option>N??o</option>
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
                invalid={this.props.state.airbag === "" && this.state.onchange}
              >
                <option></option>
                <option>Sim</option>
                <option>N??o</option>
              </Input>

              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </>
        )}

        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Seus dados</span>
        </Label>

        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            placeholder="Digite o seu name"
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
            <option>N??o informado</option>
          </Input>

          <FormFeedback>Selecione o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>RG</Label>
          <Input
            type="text"
            name="rg"
            placeholder="Digite o seu RG"
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
              disabled
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
              <InputMask
                mask="(99) 99999-9999"
                onChange={this.props.onChange}
                value={this.props.state.phone}
                disabled={this.props.disabled}
              >
                {(inputProps) => (
                  <Input
                    {...inputProps}
                    type="text"
                    name="phone"
                    placeholder="(82) 99999-9999"
                    invalid={
                      this.props.state.phone === "" && this.state.onchange
                    }
                  />
                )}
              </InputMask>

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

        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Endere??o</span>
        </Label>

        <FormGroup>
          <Label>CEP</Label>
          <InputMask
            mask="99999-999"
            maskChar=""
            onChange={this.props.onChange}
            value={this.props.state.cep}
            disabled={this.props.disabled}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                type="text"
                name="cep"
                placeholder="Digite o CEP"
                invalid={this.props.state.cep === "" && this.state.onchange}
              />
            )}
          </InputMask>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>UF</Label>
          <Input
            type="text"
            name="uf"
            placeholder="Digite o Estado"
            onChange={this.props.onChange}
            disabled
            //={this.props.disabled}
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
            onChange={this.props.onChange}
            disabled
            //={this.props.disabled}
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
              <Label>Endere??o</Label>
              <Input
                type="text"
                name="address"
                placeholder="Digite o Endere??o"
                onChange={this.props.onChange}
                disabled
                //={this.props.disabled}
                value={this.props.state.address}
                invalid={this.props.state.address === "" && this.state.onchange}
              />

              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>
          <FormGroup>
            <Label>N??mero</Label>
            <Input
              type="text"
              name="number_address"
              placeholder="Digite o n??mero"
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
                onChange={this.props.onChange}
                disabled={this.props.disabled}
                value={this.props.state.complement_address}
                // invalid={
                //   this.props.state.complement_address === "" &&
                //   this.state.onchange
                // }
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
                onChange={this.props.onChange}
                disabled
                //={this.props.disabled}
                value={this.props.state.district}
                invalid={
                  this.props.state.district === "" && this.state.onchange
                }
              />
              <FormFeedback>Preencha o campo!</FormFeedback>
            </FormGroup>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            color="secondary"
            style={{ marginRight: 10 }}
            onClick={() => this.props.handlePrevForm()}
          >
            Voltar
          </Button>
          <Button color="primary" onClick={() => this.handleForm()}>
            Pr??ximo
          </Button>
        </div>
      </Form>
    );
  }
}

export default Vehicle;
