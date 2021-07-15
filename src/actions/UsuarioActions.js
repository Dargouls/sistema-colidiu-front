import * as types from "../actions/actionTypes";

import { api } from "../services/api";

import { setToken } from "../services/auth";

import { toast } from "react-toastify";

const actionCreator = (type, payload = null) => ({ type, payload });

export const changeNomeUsuario = (nome) =>
  actionCreator(types.CHANGE_NOME_USUARIO, nome);

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
      console.log("AQUI");
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

// export const cadastro = (nome, email, senha, confirmarSenha, telefone) => async dispatch => {

//     let aconteceuErro = false;

//     // Se existe algum campo está vazio ele retorna uma mensagem
//     // Nos campos email e telefone é realizada uma verificação para verificar se o campo é válido
//     // Se nenhum erro ocorrer no campo, ele define a mensagem de campo invalido como vazio
//     if(!nome) {
//         dispatch(changeMsgNomeInvalidUsuario("Digite o seu nome"));
//         aconteceuErro = true;
//     } else {
//         dispatch(changeMsgNomeInvalidUsuario(""));
//     }
//     if(!email) {
//         dispatch(changeMsgEmailInvalidUsuario("Digite o seu email"));
//         aconteceuErro = true;
//     } else if (!validarEmail(email)) {
//         dispatch(changeMsgEmailInvalidUsuario("Este email não é válido"));
//         aconteceuErro = true;
//     } else {
//         dispatch(changeMsgEmailInvalidUsuario(""));
//     }
//     if(!senha) {
//         dispatch(changeMsgSenhaInvalidUsuario("Digite a sua senha"));
//         aconteceuErro = true;
//     } else if (senha.length < 6) {
//         dispatch(changeMsgSenhaInvalidUsuario("A senha deve conter no mínimo 6 caracteres"));
//         aconteceuErro = true;
//     } else {
//         dispatch(changeMsgSenhaInvalidUsuario(""));
//     }
//     if(!confirmarSenha) {
//         dispatch(changeMsgConfirmarSenhaInvalidUsuario("Confirme a sua senha"));
//         aconteceuErro = true;
//     } else {
//         dispatch(changeMsgConfirmarSenhaInvalidUsuario(""));
//     }
//     if(!telefone) {
//         dispatch(changeMsgTelefoneInvalidUsuario("Digite o seu telefone"));
//         aconteceuErro = true;
//     } else if (!validarTelefone(telefone)) {
//         dispatch(changeMsgTelefoneInvalidUsuario("Esse telefone não é válido"));
//         aconteceuErro = true;
//     } else {
//         dispatch(changeMsgTelefoneInvalidUsuario(""));
//     }

//     // Se aconteceu algum erro por falta de preenchimento dos campos ou validação ele para o processamento
//     if (aconteceuErro == true) {
//         return false;
//     } else {

//         // Verifica se o campo confirmar senha é igual ao da senha
//         if (senha != confirmarSenha) {
//             return dispatch(changeMsgConfirmarSenhaInvalidUsuario("Esta senha é diferente da informada anteriormente"));
//         } else {

//             const body = {
//                 nome,
//                 email,
//                 senha,
//                 telefone
//             }

//             const response = await api.post("/usuario/cadastro", body);

//             // Se não tiver nenhum erro e o status for de sucesso, o cadastro foi efetuado corretamente
//             if(response.status == 200 && response.originalError == null && response.data.event == "sucess") {
//                 toast.success(response.data.msg);
//                 return response.data.event;

//             // Exibe o erro padrão enviado pelo servidor se por acaso algum campo não foi preenchido corretamente
//             // OBS.: Verificação de Precução, pois todos os campos já são validados pela aplicação antes da requisição ser enviada
//             } else if (response.status == 400 && response.originalError != null && response.data.event == "erro_path_null") {
//                 toast.warn(response.data.msg);
//                 return false;

//             // Exibe os erros emitidos pela API já tratados
//             } else if (response.status == 400 && response.originalError != null && response.data.event == "erro_create_processed") {
//                 if (!!response.data.msg["erro_validate_nome"]) dispatch(changeMsgNomeInvalidUsuario(response.data.msg["erro_validate_nome"]));
//                 if (!!response.data.msg["erro_validate_email"]) dispatch(changeMsgEmailInvalidUsuario(response.data.msg["erro_validate_email"]));
//                 if (!!response.data.msg["erro_unique_violated_email"]) dispatch(changeMsgEmailInvalidUsuario(response.data.msg["erro_unique_violated_email"]));
//                 if (!!response.data.msg["erro_validate_senha"]) dispatch(changeMsgSenhaInvalidUsuario(response.data.msg["erro_validate_senha"]));
//                 if (!!response.data.msg["erro_validate_telefone"]) dispatch(changeMsgTelefoneInvalidUsuario(response.data.msg["erro_validate_telefone"]));

//             // Exibe o erro padrão da API
//             } else if (response.status == 400 && response.originalError != null && response.data.event == "erro_create_default") {
//                 toast.error(response.data.msg);
//                 return false;

//             // Exibe um erro padrão se a API não retornar nada
//             } else {
//                 toast.error("Não foi possivel efetuar o cadastro, tente novamente!");
//                 return false;
//             }
//         }
//     }
// };

// Verifica se o telefone é válido
const validarTelefone = (telefone) => {
  let regexp = new RegExp(
    "^\\([0-9]{2}\\)(([0-9]{5}-[0-9]{4})|([0-9]{5}-[0-9]{3}))$"
  );

  return regexp.test(telefone);
};
// Verifica se o email é válido
const validarEmail = (email) => {
  let regexp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return regexp.test(email);
};
