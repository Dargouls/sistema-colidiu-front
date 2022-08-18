import React, { Component } from "react";
import {
  Col,
  Button,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Row,
  TextArea,
} from "reactstrap";
import { toast } from "react-toastify";
import { getUser } from "../../../../../services/auth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Map from "../../../../../components/Map";
import "./styles.css";

import "../styles.css";
class Accident extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
    this.state = {
      onchange: false,
      image: [],
      checked: false,
    };
  }

  handleForm() {
    // this.props.handleNextForm
    this.setState({ onchange: true });
    let data = this.props.state;

    //adicioanr os dados
    if (data.address_occurrence === "") {
      this.handleWarning("address_occurrence");
      return;
    }
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
    if (data.description_occurrence === "") {
      this.handleWarning("description_occurrence");
      return;
    }

    this.props.handleNextForm();
  }

  handleWarning(type) {
    const names = {
      address_occurrence: "Endereço da ocorrência",
      type_accident: "Tipo de acidente",
      zone: "Zona",
      feriado: "Feriado",
      image: "Imagem",
      description_occurrence: "Descrição do acidente",
    };

    toast.warn(`${names[type]} é obrigatório`);
  }

  componentDidMount() {
    const user = getUser();
    this.setState({ permissions: user.permissions });
    console.log("image", this.state.image);
  }

  handleImage(e) {
    const newArray = [];
    if (e.target.files) {
      Object.values(e.target.files).forEach((element) => {
        newArray.push(URL.createObjectURL(element));
      });
    }
    this.setState({ image: newArray });
    this.props.handleInputFile(e);
  }

  render() {
    return (
      <>
        {!this.props.disabled && (
          <FormGroup>
            <Label>Endereço da ocorrência</Label>
            <Map onChange={this.props.onChangeAddress} />
          </FormGroup>
        )}
        <FormGroup className="formItem">
          <Label>Endereço</Label>
          <Input
            name="address_occurrence"
            type="text"
            required
            disabled
            value={this.props.state.address_occurrence}
          />
        </FormGroup>
        {!this.props.disabled && (
          <FormGroup className="formItem">
            <Label>O acidente foi em algum cruzamento?</Label>
            <input
              type="checkbox"
              name="check-accept"
              style={{ margin: "5px 10px" }}
              value={this.state.checked}
              onChange={() => this.setState({ checked: !this.state.checked })}
            />
          </FormGroup>
        )}

        {this.state.checked && (
          <FormGroup className="formItem">
            <Label>Digite o endereço de ambas as ruas</Label>
            <Input
              style={{ resize: "none" }}
              name="address_crossing"
              type="textarea"
              required
              disabled={this.props.disabled}
              rows={4}
              value={this.props.state.address_crossing}
              onChange={this.props.onChange}
            />
          </FormGroup>
        )}

        {this.props.disabled && this.props.state.address_crossing && (
          <FormGroup className="formItem">
            <Label>Digite o endereço de ambas as ruas</Label>
            <Input
              style={{ resize: "none" }}
              name="address_crossing"
              type="textarea"
              required
              disabled={this.props.disabled}
              rows={4}
              value={this.props.state.address_crossing}
              onChange={this.props.onChange}
            />
          </FormGroup>
        )}

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

        <FormGroup className="formItem">
          <Label>Descreva como foi o acidente</Label>
          <Input
            style={{ resize: "none" }}
            name="description_occurrence"
            type="textarea"
            required
            rows={4}
            resize
            disabled={this.props.disabled}
            value={this.props.state.description_occurrence}
            onChange={this.props.onChange}
          />
        </FormGroup>

        {!this.props.disabled && (
          <div
            style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
          >
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
                <img
                  key={index}
                  src={item}
                  width="150"
                  height="150"
                  style={{ marginRight: 10 }}
                />
              ))}
            </div>
          </div>
        )}

        {this.props.disabled && this.props.state.images && (
          <div>
            {this.props.state.images.map((item, index) => (
              <img
                key={index}
                src={item}
                width="150"
                height="150"
                style={{ marginRight: 10 }}
              />
            ))}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {this.props.disabled ? (
            <Link
              to={
                getUser().permissions === "all"
                  ? "/ocorrencias"
                  : "/historico-registro"
              }
            >
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
