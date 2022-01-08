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

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    // this.handleNextForm = this.props.handleNextForm(this);
    this.state = {
      onchange: false,
    };
  }

  handleForm() {
    // this.props.handleNextForm
    this.setState({ onchange: true });
    let data = this.props.state;

    if (data.number_occupants === "") {
      return;
    }
    this.props.handleNextForm();
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
            required
            value={this.props.state.type_vehicle}
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
            required
            onChange={this.props.onChange}
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
            value={this.props.state.state_vehicle}
          >
            <option></option>
            <option>Estacionado</option>
            <option>Movimento</option>
            <option>Parado</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Categoria</Label>
          <Input
            type="select"
            name="category_vehicle"
            onChange={this.props.onChange}
            value={this.props.state.category_vehicle}
          >
            <option></option>
            <option>Aluguel</option>
            <option>Particular</option>
            <option>Parado</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Possui seguro?</Label>
          <Input
            type="select"
            name="safe_vehicle"
            onChange={this.props.onChange}
            value={this.props.state.safe_vehicle}
          >
            <option></option>
            <option>Sim</option>
            <option>Não</option>
            <option>Não informado</option>
          </Input>
        </FormGroup>

        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Seus dados</span>
        </Label>

        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            placeholder="Digite a quantidade de ocupantes"
            required
            onChange={this.props.onChange}
            value={this.props.state.name}
          />
        </FormGroup>

        <FormGroup>
          <Label>Sexo</Label>
          <Input
            type="select"
            name="sex"
            onChange={this.props.onChange}
            value={this.props.state.sex}
          >
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não informado</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>RG</Label>
          <Input
            type="text"
            name="rg"
            placeholder="Digite o seu RG"
            required
            onChange={this.props.onChange}
            value={this.props.state.rg}
          />
        </FormGroup>

        <FormGroup>
          <Label>UF RG</Label>
          <Input
            type="select"
            name="uf_rg"
            placeholder="Selecione o estado"
            onChange={this.props.onChange}
            value={this.props.state.uf_rg}
          >
            <option></option>
            {estados.UF.map((item, index) => {
              return <option key={index}>{item.nome}</option>;
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>CNH</Label>
          <Input
            type="text"
            name="cnh"
            placeholder="Digite o sua CNH"
            required
            onChange={this.props.onChange}
            value={this.props.state.cnh}
          />
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
              value={this.props.state.cpf}
            />
          </FormGroup>

          <FormGroup>
            <Label>Data de nascimento</Label>
            <Input
              type="date"
              name="birth_date"
              required
              onChange={this.props.onChange}
              value={this.props.state.birth_date}
            />
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
            required
            onChange={this.props.onChange}
            value={this.props.state.cep}
          />
        </FormGroup>

        <FormGroup>
          <Label>UF</Label>
          <Input
            type="text"
            name="uf"
            placeholder="Digite o Estado"
            required
            onChange={this.props.onChange}
            value={this.props.state.uf}
          />
        </FormGroup>
        <FormGroup>
          <Label>Municipio</Label>
          <Input
            type="text"
            name="municipality"
            placeholder="Digite o Municipio"
            required
            onChange={this.props.onChange}
            value={this.props.state.municipality}
          />
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
                required
                onChange={this.props.onChange}
                value={this.props.state.address}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Numero</Label>
            <Input
              type="text"
              name="number_address"
              placeholder="Digite o número"
              required
              onChange={this.props.onChange}
              value={this.props.state.number_address}
            />
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
                value={this.props.state.complement_address}
              />
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
                value={this.props.state.district}
              />
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
                required
                onChange={this.props.onChange}
                value={this.props.state.phone}
              />
            </FormGroup>
          </div>

          <div style={{ width: "45%" }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                placeholder="seuemail@email.com"
                required
                onChange={this.props.onChange}
                value={this.props.state.email}
              />
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
            Próximo
          </Button>
        </div>
      </Form>
    );
  }
}

export default Vehicle;
