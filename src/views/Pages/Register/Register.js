import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link, Redirect, Switch } from 'react-router-dom';

import InputMask from 'react-input-mask';

import './Register.css';

import { 
  // cadastro,
  resetCamposUsuario, 
  changeNomeUsuario, 
  changeEmailUsuario, 
  changeSenhaUsuario,
  changeConfirmarSenhaUsuario,
  changeTelefoneUsuario 
} from '../../../actions/UsuarioActions';

import { connect } from 'react-redux';

class Register extends Component {

  componentDidMount() {
    this.props.resetCamposUsuario();
  }

  componentWillUnmount() {
    this.props.resetCamposUsuario();
  }

  _cadastro = async e => {
    e.preventDefault();
    
    const { nome, email, senha, confirmarSenha, telefone } = this.props;
    
    // let cadastro = await this.props.cadastro(nome, email, senha, confirmarSenha, telefone);
    
    // if(cadastro == 'sucess') {
    //   return this.props.history.push('/login');
    // }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="9" xl="9">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this._cadastro}>
                    <div className="d-flex flex-row justify-content-between">
                      <h1>Cadastro</h1>
                      <div className="container-btn-entrar d-flex flex-row justify-content-around align-items-center">
                        <span className="d-md-down-none">Possui uma conta? </span>
                        <Link to="/login">
                          <Button className="btn-entrar" color="primary">Entrar</Button>
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
                      <Input 
                        type="text" 
                        placeholder="Nome" 
                        autoComplete="username"
                        value={this.props.nome}
                        onChange={ event => this.props.changeNomeUsuario(event.target.value) }
                        invalid={this.props.msgNomeInvalid != "" && this.props.msgNomeInvalid != "sucess"} 
                        valid={this.props.msgNomeInvalid == "sucess"} 
                      />
                      <FormFeedback>{this.props.msgNomeInvalid}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        autoComplete="email" 
                        value={this.props.email}
                        onChange={ event => this.props.changeEmailUsuario(event.target.value) }
                        invalid={this.props.msgEmailInvalid != "" && this.props.msgEmailInvalid != "sucess"} 
                        valid={this.props.msgEmailInvalid == "sucess"} 
                      />
                      <FormFeedback>{this.props.msgEmailInvalid}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <InputMask
                        mask="(99)99999-9999"
                        value={this.props.telefone}
                        onChange={ event => this.props.changeTelefoneUsuario(event.target.value) }
                        maskChar=""
                      >
                        {
                          (inputProps) => (
                            <Input 
                              { ...inputProps }
                              type="text" 
                              placeholder="Telefone" 
                              autoComplete="telefone" 
                              invalid={this.props.msgTelefoneInvalid != "" && this.props.msgTelefoneInvalid != "sucess"} 
                              valid={this.props.msgTelefoneInvalid == "sucess"}
                            />
                          )
                        }
                      </InputMask>
                      <FormFeedback>{this.props.msgTelefoneInvalid}</FormFeedback>
                    </InputGroup>
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
                        value={this.props.senha}
                        onChange={ event => this.props.changeSenhaUsuario(event.target.value) }
                        invalid={this.props.msgSenhaInvalid != "" && this.props.msgSenhaInvalid != "sucess"} 
                        valid={this.props.msgSenhaInvalid == "sucess"} 
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
                        value={this.props.confirmarSenha}
                        onChange={ event => this.props.changeConfirmarSenhaUsuario(event.target.value) }
                        invalid={this.props.msgConfirmarSenhaInvalid != "" && this.props.msgConfirmarSenhaInvalid != "sucess"} 
                        valid={this.props.msgConfirmarSenhaInvalid == "sucess"} 
                      />
                      <FormFeedback>{this.props.msgConfirmarSenhaInvalid}</FormFeedback>
                    </InputGroup>
                    <Button type="submit" color="success" block>Criar Conta</Button>
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

const mapStateToProps = state => ({
  nome: state.UsuarioReducer.nome,
  email: state.UsuarioReducer.email,
  senha: state.UsuarioReducer.senha,
  confirmarSenha: state.UsuarioReducer.confirmarSenha,
  telefone: state.UsuarioReducer.telefone,

  msgNomeInvalid: state.UsuarioReducer.msgNomeInvalid,
  msgEmailInvalid: state.UsuarioReducer.msgEmailInvalid,
  msgSenhaInvalid: state.UsuarioReducer.msgSenhaInvalid,
  msgConfirmarSenhaInvalid: state.UsuarioReducer.msgConfirmarSenhaInvalid,
  msgTelefoneInvalid: state.UsuarioReducer.msgTelefoneInvalid,
});

const mapActionToProps = {
  // cadastro,
  resetCamposUsuario, 
  changeNomeUsuario, 
  changeEmailUsuario, 
  changeSenhaUsuario,
  changeConfirmarSenhaUsuario,
  changeTelefoneUsuario 
};

export default connect(mapStateToProps, mapActionToProps)(Register);
