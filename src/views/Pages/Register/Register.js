import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Spinner,
} from "reactstrap";
import { Link, Redirect, Switch } from "react-router-dom";

import InputMask from "react-input-mask";
import { toast } from "react-toastify";

import "./Register.css";

import {
  registerUser,
  resetCamposUsuario,
  changeNomeUsuario,
  changeCpfUsuario,
  // changeRgUsuario,
  changeEmailUsuario,
  changeSenhaUsuario,
  changeConfirmarSenhaUsuario,
  changeTelefoneUsuario,
} from "../../../actions/UsuarioActions";

import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: {
        cpf: "",
        nome: "",
        // rg: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        telefone: "",
      },
      validation: {
        cpf: "",
        nome: "",
        // rg: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        telefone: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, position) {
    if (position === "cpf") {
      this.setState({
        ...this.state,
        validation: {
          ...this.state.validation,
          cpf: isValidCPF(event.target.value) ? "sucess" : "error",
        },
      });
    }
    // Validação e-mail
    if (position === "email") {
      this.setState({
        ...this.state,
        validation: {
          ...this.state.validation,
          email: validEmail(event.target.value) ? "sucess" : "error",
        },
      });
    }

    if (position === "telefone") {
      this.setState({
        ...this.state,
        validation: {
          ...this.state.validation,
          telefone: validTelfone(event.target.value) ? "sucess" : "error",
        },
      });
    }

    this.setState({
      user: {
        ...this.state.user,
        [position]: event.target.value,
      },
    });
  }

  componentDidMount() {
    this.props.resetCamposUsuario();
  }

  componentWillUnmount() {
    this.props.resetCamposUsuario();
  }

  _registerUser = async (e) => {
    e.preventDefault();

    const validation = Object.values(this.state.validation).some(
      (item) => item === "error"
    );

    if (validation) {
      return toast.error("Verifique os campos destacados em vermelho!");
    }

    if (this.state.user.senha !== this.state.user.confirmarSenha) {
      return toast.warning("Senhas digitadas não são correspondentes!");
    }
    const { cpf, nome, email, senha, confirmarSenha, telefone } =
      this.state.user;

    let register = await this.props.registerUser(
      nome,
      cpf,
      "",
      email,
      senha,
      confirmarSenha,
      telefone
    );
    if (register) {
      this.setState({ loading: !this.state.loading });
      this.props.history.push("/");
    } else {
      this.setState({ loading: false }); //Caso o registro tenha falhado, não irá chamar Spinner
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="9" xl="9">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this._registerUser}>
                    <div className="d-flex flex-row justify-content-between">
                      <h1>Cadastro</h1>
                      <div className="container-btn-entrar d-flex flex-row justify-content-around align-items-center">
                        <span className="d-md-down-none">
                          Possui uma conta?{" "}
                        </span>
                        <Link to="/login">
                          <Button
                            className="btn-entrar"
                            style={{ backgroundColor: "#fbc210" }}
                          >
                            Entrar
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <p className="text-muted">Crie sua conta</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <InputMask
                        mask="999.999.999-99"
                        maskChar=""
                        required
                        value={this.state.user.cpf}
                        onChange={(event) => {
                          this.handleChange(event, "cpf");
                        }}
                      >
                        {(inputProps) => (
                          <Input
                            {...inputProps}
                            type="text"
                            placeholder="CPF"
                            autoComplete="CPF"
                            invalid={this.state.validation.cpf === "error"}
                            valid={this.state.validation.cpf === "sucess"}
                          />
                        )}
                      </InputMask>
                      <FormFeedback>{this.props.msgCpfInvalid}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Nome"
                        autoComplete="username"
                        required
                        value={this.state.user.nome}
                        onChange={(event) => {
                          this.handleChange(event, "nome");
                        }}
                        invalid={this.state.validation.nome === "error"}
                        valid={this.state.validation.nome === "sucess"}
                      />
                      <FormFeedback>{this.props.msgNomeInvalid}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <InputMask
                        mask="(99) 99999-9999"
                        value={this.state.user.telefone}
                        onChange={(event) => {
                          this.handleChange(event, "telefone");
                        }}
                        required
                        maskChar=""
                      >
                        {(inputProps) => (
                          <Input
                            {...inputProps}
                            type="text"
                            required
                            placeholder="Telefone"
                            autoComplete="telefone"
                            invalid={this.state.validation.telefone === "error"}
                            valid={this.state.validation.telefone === "sucess"}
                          />
                        )}
                      </InputMask>
                      <FormFeedback>
                        {this.props.msgTelefoneInvalid}
                      </FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        required
                        placeholder="Email"
                        autoComplete="email"
                        value={this.state.user.email}
                        onChange={(event) => {
                          this.handleChange(event, "email");
                        }}
                        invalid={this.state.validation.email === "error"}
                        valid={this.state.validation.email === "sucess"}
                      />
                      <FormFeedback>{this.props.msgEmailInvalid}</FormFeedback>
                    </InputGroup>
                    {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="rg"
                        placeholder="RG"
                        autoComplete="rg"
                        value={this.state.user.rg}
                        required
                        onChange={(event) => {
                          this.handleChange(event, "rg");
                        }}
                        invalid={this.state.validation.rg === "error"}
                        valid={this.state.validation.rg === "sucess"}
                      />
                      <FormFeedback>{this.props.msgRgInvalid}</FormFeedback>
                    </InputGroup> */}

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Senha"
                        autoComplete="new-password"
                        required
                        value={this.state.user.senha}
                        onChange={(event) => {
                          this.handleChange(event, "senha");
                        }}
                        invalid={this.state.validation.senha === "error"}
                        valid={this.state.validation.senha === "sucess"}
                      />
                      <FormFeedback>{this.props.msgSenhaInvalid}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Confirmar senha"
                        autoComplete="new-password"
                        required
                        value={this.state.user.confirmarSenha}
                        onChange={(event) => {
                          this.handleChange(event, "confirmarSenha");
                        }}
                        invalid={
                          this.state.validation.confirmarSenha === "error"
                        }
                        valid={
                          this.state.validation.confirmarSenha === "sucess"
                        }
                      />
                      <FormFeedback>
                        {this.props.msgConfirmarSenhaInvalid}
                      </FormFeedback>
                    </InputGroup>
                    {this.state.loading ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 10,
                        }}
                      >
                        <Spinner />
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        style={{ backgroundColor: "#263238", color: "#FFF" }}
                        block
                      >
                        Criar Conta
                      </Button>
                    )}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.UsuarioReducer.nome,
  cpf: state.UsuarioReducer.cpf,
  // rg: state.UsuarioReducer.rg,
  email: state.UsuarioReducer.email,
  senha: state.UsuarioReducer.senha,
  confirmarSenha: state.UsuarioReducer.confirmarSenha,
  telefone: state.UsuarioReducer.telefone,

  msgNomeInvalid: state.UsuarioReducer.msgNomeInvalid,
  msgCpfInvalid: state.UsuarioReducer.msgCpfInvalid,
  // msgRgInvalid: state.UsuarioReducer.msgRgInvalid,
  msgEmailInvalid: state.UsuarioReducer.msgEmailInvalid,
  msgSenhaInvalid: state.UsuarioReducer.msgSenhaInvalid,
  msgConfirmarSenhaInvalid: state.UsuarioReducer.msgConfirmarSenhaInvalid,
  msgTelefoneInvalid: state.UsuarioReducer.msgTelefoneInvalid,
});

const mapActionToProps = {
  registerUser,
  resetCamposUsuario,
  changeNomeUsuario,
  changeCpfUsuario,
  // changeRgUsuario,
  changeEmailUsuario,
  changeSenhaUsuario,
  changeConfirmarSenhaUsuario,
  changeTelefoneUsuario,
};

export default connect(mapStateToProps, mapActionToProps)(Register);

// Verifica se o telefone é válido
const validTelfone = (telefone) => {
  let regexp = new RegExp(
    "^\\([0-9]{2}\\)\\s(([0-9]{5}-[0-9]{4})|([0-9]{5}-[0-9]{4}))$"
  );
  return regexp.test(telefone);
};
// Verifica se o email é válido
const validEmail = (email) => {
  return email.includes("@");
};

const isValidCPF = (cpf) => {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  cpf = cpf.split("").map((el) => +el);
  const rest = (count) =>
    ((cpf
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === cpf[9] && rest(11) === cpf[10];
};
