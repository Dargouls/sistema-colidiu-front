import * as types from "../actions/actionTypes";

import { api } from "../services/api";

import { setToken } from "../services/auth";

import { toast } from "react-toastify";

const actionCreator = (type, payload = null) => ({ type, payload });

export const changeNomeUsuario = (nome) =>
  actionCreator(types.CHANGE_NOME_USUARIO, nome);

export const changeCpfUsuario = (cpf) => {
  console.log("CPF", cpf);
  // actionCreator(types.CHANGE_CPF_USUARIO, cpf);
};

export const changeRgUsuario = (rg) =>
  actionCreator(types.CHANGE_RG_USUARIO, rg);

export const changeEmailUsuario = (email) =>
  actionCreator(types.CHANGE_EMAIL_USUARIO, email);

export const changeSenhaUsuario = (senha) =>
  actionCreator(types.CHANGE_SENHA_USUARIO, senha);

export const changeConfirmarSenhaUsuario = (confimSenha) =>
  actionCreator(types.CHANGE_CONFIRMAR_SENHA_USUARIO, confimSenha);

export const changeTelefoneUsuario = (telefone) =>
  actionCreator(types.CHANGE_TELEFONE_USUARIO, telefone);

export const changeMsgNomeInvalidUsuario = (msgNomeInvalid) =>
  actionCreator(types.CHANGE_MSG_NOME_INVALID_USUARIO, msgNomeInvalid);

export const changeMsgCpfInvalidUsuario = (msgCpfInvalid) =>
  actionCreator(types.CHANGE_MSG_CPF_INVALID_USUARIO, msgCpfInvalid);

export const changeMsgRgInvalidUsuario = (msgRgInvalid) =>
  actionCreator(types.CHANGE_MSG_RG_INVALID_USUARIO, msgRgInvalid);

export const changeMsgEmailInvalidUsuario = (msgEmailInvalid) =>
  actionCreator(types.CHANGE_MSG_EMAIL_INVALID_USUARIO, msgEmailInvalid);

export const changeMsgSenhaInvalidUsuario = (msgSenhaInvalid) =>
  actionCreator(types.CHANGE_MSG_SENHA_INVALID_USUARIO, msgSenhaInvalid);

export const changeMsgConfirmarSenhaInvalidUsuario = (
  msgConfirmarSenhaInvalid
) =>
  actionCreator(
    types.CHANGE_MSG_CONFIRMAR_SENHA_INVALID_USUARIO,
    msgConfirmarSenhaInvalid
  );

export const changeMsgTelefoneInvalidUsuario = (msgTelefoneInvalid) =>
  actionCreator(types.CHANGE_MSG_TELEFONE_INVALID_USUARIO, msgTelefoneInvalid);

export const resetCamposUsuario = () =>
  actionCreator(types.RESET_CAMPOS_USUARIO);

export const login = (email, senha) => async (dispatch) => {
  let aconteceuErro = false;

  // Se aconteceu algum campo está vazio ele retorna uma mensagem
  // Se não, ele define a mensagem de campo invalido como vazio
  if (!email) {
    dispatch(changeMsgEmailInvalidUsuario("Digite o seu email"));
    aconteceuErro = true;
  } else {
    dispatch(changeMsgEmailInvalidUsuario(""));
  }
  if (!senha) {
    dispatch(changeMsgSenhaInvalidUsuario("Digite a sua senha"));
    aconteceuErro = true;
  } else {
    dispatch(changeMsgSenhaInvalidUsuario(""));
  }

  // Se aconteceu algum erro ele para a requisição
  // Se não, ele continua
  if (aconteceuErro) {
    return false;
  } else {
    const body = {
      email,
      password: senha,
    };
    const response = await api.post("/login/adm", body);

    if (response.data.token) {
      setToken("Token");
      return "Autenticado";
    } else {
      if (response.data.mensagem) {
        toast.error("Desculpe, mas você não é um administrador!");
      } else {
        toast.error("Desculpe, ocorreu algum erro contacte um administrador.");
      }
    }
  }
};

export const registerUser =
  (nome, cpf, rg, email, senha, confirmarSenha, telefone) =>
  async (dispatch) => {
    const body = {
      name: nome,
      cpf,
      rg,
      email,
      password: senha,
      telephone: telefone,
    };

    const response = await api.post("/users", body);

    // Se não tiver nenhum erro e o status for de sucesso, o cadastro foi efetuado corretamente
    if (response.status == 200 && response.originalError == null) {
      if (response.data.token) {
        toast.success(response.data.mensagem);
        setToken("Token");
        return true;
      } else {
        toast.warn(response.data.mensagem);
        return false;
      }
      // Exibe o erro padrão enviado pelo servidor se por acaso algum campo não foi preenchido corretamente
      // OBS.: Verificação de Precução, pois todos os campos já são validados pela aplicação antes da requisição ser enviada
    } else {
      toast.error("Não foi possivel efetuar o cadastro, tente novamente!");
      return false;
    }
  };
