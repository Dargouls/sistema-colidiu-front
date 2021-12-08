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
  FormGroup,
  Label,
  NavLink
} from "reactstrap";

import { connect } from "react-redux";
import {
  changeEmailUsuario,
  changeSenhaUsuario,
  login,
  resetCamposUsuario,
} from "../../../actions/UsuarioActions";

import "./Permission.css";
import {Termos} from './Termos'

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
          src={require("../../../assets/img/brand/logo-smtt.png")}
          alt="logo"
        ></img>
        <Container>
          <Form>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                <FormGroup>
                <h2 className="title-entrar">Termos de Uso</h2>
              <Input type="textarea"  value={Termos} style={{height: 150, resize: 'none'}}/>
            </FormGroup>
                  <CardBody>
                    <Row>
                      <Col xs="12">
                        
                        <Link to='/register'>
                          <Button
                            type="submit"
                            
                            style={{
                              backgroundColor: "#263238",
                              color: "#FFF",
                              marginBottom: 10
                            }}
                            className="px-4 btn-entrar"
                            >
                            Aceitar
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  <Row>
                    <Col xs="12">
                      <Button
                        type="submit"
                        style={{
                          color: "#263238",
                          backgroundColor: '#b3bbc2'
                        }}
                        className="px-4 btn-entrar"
                      >
                        Voltar
                      </Button>
                    </Col>
                  </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          </Form>
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
