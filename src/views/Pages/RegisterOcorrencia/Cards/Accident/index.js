import React, { Component } from "react";
import { Col, Button, FormGroup, Input, Label, FormFeedback, Row } from "reactstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class Accident extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
    // this.handleNextForm = this.props.handleNextForm(this);
    this.state = {
      onchange: false,
      image: [],
    };
  }

  handleForm() {
    // this.props.handleNextForm
    this.setState({ onchange: true });
    let data = this.props.state;

    //adicioanr os dados
    if (data.type_accident === "") {
      this.handleWarning("type_accident");
      return;
    }
    if (data.zone === "") {
      this.handleWarning("zone");
      return;
    }
    if (data.feriado === "") {
      this.handleWarning("feriado");
      return;
    }

    this.props.handleNextForm();
  }

  handleWarning(type) {
    const names = {
      type_accident: "Tipo de acidente",
      zone: "Zona",
      feriado: "Feriado",
      image: "Imagem",
    };

    toast.warn(`${names[type]} é obrigatório`);
  }

  componentWillMount() {
    console.log("state:", this.props.state);
  }

  handleImage(e) {
    const newArray = [];
    if (e.target.files) {
      Object.values(e.target.files).forEach(element => {
        newArray.push(URL.createObjectURL(element))
      });
    }
    this.setState({ image: newArray })
    this.props.handleInputFile(e)
  }

  render() {
    return (
      <>
        <FormGroup>
          <Label htmlFor="name">Cidade</Label>
          <Input
            name="city"
            type="text"
            id="city_input"
            placeholder="Digite o nome da cidade"
            required
            disabled
            value={this.props.state.city}
            onChange={this.props.onChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Tipo de acidente</Label>

          <Input
            disabled={this.props.disabled}
            name="type_accident"
            type="select"
            onChange={this.props.onChange}
            value={this.props.state.type_accident}
            invalid={
              this.props.state.type_accident === "" && this.state.onchange
            }
          >
            <option></option>
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

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Zona</Label>
          <Input
            disabled={this.props.disabled}
            type="select"
            name="zone"
            onChange={this.props.onChange}
            value={this.props.state.zone}
            invalid={this.props.state.zone === "" && this.state.onchange}
          >
            <option></option>
            <option>Urbana</option>
            <option>Rural</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Feriado</Label>
          <Input
            disabled={this.props.disabled}
            type="select"
            name="feriado"
            onChange={this.props.onChange}
            value={this.props.state.feriado}
            invalid={this.props.state.feriado === "" && this.state.onchange}
          >
            <option></option>
            <option>Sim</option>
            <option>Não</option>
          </Input>

          <FormFeedback>Preencha o campo!</FormFeedback>
        </FormGroup>

        {!this.props.disabled &&
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
            <FormGroup>
              <Label>Envio de imagem</Label>
              <Input
                disabled={this.props.disabled}
                type="file"
                id="file-input"
                name="image"
                multiple
                onChange={this.handleImage}
                accept="image/png, image/jpeg, image/jpg"
                invalid={this.props.state.image === "" && this.state.onchange}
              />
              <FormFeedback>Suba uma imagem!</FormFeedback>
            </FormGroup>
            <div style={{ marginLeft: -40 }}>
              {this.state.image.map((item, index) => (
                <img key={index} src={item} width="150" height="150" style={{ marginRight: 10 }} />
              ))
              }
            </div>
          </div>
        }
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {this.props.disabled ? (
            <Link to="/ocorrencias">
              <Button color="secondary" style={{ marginRight: 10 }}>
                Voltar
              </Button>
            </Link>
          ) : (
            <Button
              color="secondary"
              style={{ marginRight: 10 }}
              onClick={() => this.props.handlePrevForm()}
            >
              Voltar
            </Button>
          )}
          <Button color="primary" onClick={() => this.handleForm()}>
            Próximo
          </Button>
        </div>
      </>
    );
  }
}

export default Accident;
