import React, { Component } from "react";
import Map from '../../../components/Map'
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
  Spinner
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

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

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
    this.setState({ loading: true });
    e.preventDefault();

    const { email, senha } = this.props;

    let autenticacao = await this.props.login(email, senha);
    
    this.setState({loading: false});
    if (autenticacao === "Autenticado") {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="app flex-colum justify-content-center align-items-center">
        <img
          className="logo"
          src={require("../../../assets/img/brand/logo-smtt.png")}
          alt="logo"
        ></img>
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this._login}>
                      <h1 className="title-entrar">Colidiu</h1>
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
                          {this.state.loading ?
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                              <Spinner />
                            </div>
                            :
                            <Button
                              type="submit"
                              style={{ backgroundColor: "#263238", color: "#FFF", }}
                              className="px-4 btn-entrar"
                            >
                              Entrar
                            </Button>
                          }
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <Link to="/permission">
                            Não tem conta? Cadastre-se
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
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
