import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormFeedback,
  Row,
  Form,
} from "reactstrap";

import { connect } from "react-redux";
import {
  changeEmailUsuario,
  changeSenhaUsuario,
  login,
  resetCamposUsuario,
} from "../../../actions/UsuarioActions";

import "./Login.css";

class Login extends Component {
  componentDidMount() {
    // this.props.resetCamposUsuario()
    // window.addEventListener("keyup", e=>{
    //   if (e.code == "Enter" || e.code == "NumpadEnter") this._login();
    // });
  }

  componentWillUnmount() {
    // this.props.resetCamposUsuario()
  }

  _login = async (e) => {
    e.preventDefault();

    const { email, senha } = this.props;

    let autenticacao = await this.props.login(email, senha);

    if (autenticacao === "Autenticado") {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="app flex-colum justify-content-center align-items-center">
        <img
          className="logo"
          src={require("../../../assets/img/brand/logo.png")}
          alt="logo"
        ></img>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this._login}>
                      <h1 className="title-entrar">Entrar</h1>
                      {/* <p className="text-muted">Sign In to your account</p> */}
                      <p className="text-muted">Entre na sua conta</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid={
                            this.props.msgEmailInvalid != "" &&
                            this.props.msgEmailInvalid != "sucess"
                          }
                          valid={this.props.msgEmailInvalid == "sucess"}
                          onChange={(event) =>
                            this.props.changeEmailUsuario(event.target.value)
                          }
                          value={this.props.email}
                          type="email"
                          placeholder="Email"
                          autoComplete="email"
                        />
                        <FormFeedback>
                          {this.props.msgEmailInvalid}
                        </FormFeedback>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid={
                            this.props.msgSenhaInvalid != "" &&
                            this.props.msgSenhaInvalid != "sucess"
                          }
                          valid={this.props.msgSenhaInvalid == "sucess"}
                          onChange={(event) =>
                            this.props.changeSenhaUsuario(event.target.value)
                          }
                          value={this.props.senha}
                          type="password"
                          placeholder="Senha"
                          autoComplete="current-password"
                        />
                        <FormFeedback>
                          {this.props.msgSenhaInvalid}
                        </FormFeedback>
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button
                            type="submit"
                            style={{
                              backgroundColor: "#FBC210",
                              color: "#000",
                            }}
                            className="px-4 btn-entrar"
                          >
                            Entrar
                          </Button>
                        </Col>
                        {/* <Col xs="12" className="d-lg-none d-xl-none mt-1">
                          <Link to="/register">
                            <Button color="primary" className="px-4 btn-cadastro">Cadastre-se</Button>
                          </Link>
                        </Col> */}
                        {/* <Col xs="12" lg="6" className="text-center">
                          <Button color="link" className="px-0 btn-esqueci-senha">Esqueceu a senha?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white py-5 d-md-down-none" style={{ width: '44%', backgroundColor: "#327AD9" }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Cadastrar</h2>
                      <p>Comece a usufruir dessa comodidade agora mesmo.</p>
                      <Link to="/register">
                        <Button className="mt-3 btn-cadastro" active tabIndex={-1}>Cadastre-se agora!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.UsuarioReducer.email,
  senha: state.UsuarioReducer.senha,
  msgEmailInvalid: state.UsuarioReducer.msgEmailInvalid,
  msgSenhaInvalid: state.UsuarioReducer.msgSenhaInvalid,
});

const mapActionToProps = {
  changeEmailUsuario,
  changeSenhaUsuario,
  login,
  resetCamposUsuario,
};

export default connect(mapStateToProps, mapActionToProps)(Login);
