import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",// Utilizado apenas no cadastro do usuário
    telefone: "",
    // perfilUsuario: "",
    auth: false,

    // Mensagens utilizadas nas validações dos formulários de login e cadastro
    msgNomeInvalid: "",
    msgEmailInvalid: "",
    msgSenhaInvalid: "",
    msgConfirmarSenhaInvalid: "",
    msgTelefoneInvalid: ""
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
        
        case types.CHANGE_NOME_USUARIO:
            return { ...state, nome: action.payload }

		case types.CHANGE_EMAIL_USUARIO:
            return { ...state, email: action.payload }
        
        case types.CHANGE_SENHA_USUARIO:
            return { ...state, senha: action.payload }

        case types.CHANGE_MSG_NOME_INVALID_USUARIO: 
            return { ...state, msgNomeInvalid: action.payload }

        case types.CHANGE_MSG_EMAIL_INVALID_USUARIO: 
            return { ...state, msgEmailInvalid: action.payload }

        case types.CHANGE_MSG_SENHA_INVALID_USUARIO: 
            return { ...state, msgSenhaInvalid: action.payload }

        case types.CHANGE_MSG_CONFIRMAR_SENHA_INVALID_USUARIO: 
            return { ...state, msgConfirmarSenhaInvalid: action.payload }
        
        case types.CHANGE_MSG_TELEFONE_INVALID_USUARIO: 
            return { ...state, msgTelefoneInvalid: action.payload }

        case types.RESET_CAMPOS_USUARIO:
            return { ...state, nome: "", email: "", senha: "", confirmarSenha: "", telefone: "", msgNomeInvalid: "", msgEmailInvalid: "", msgSenhaInvalid: "", msgConfirmarSenhaInvalid: "", msgTelefoneInvalid: "" }

        case types.CHANGE_CONFIRMAR_SENHA_USUARIO:
            return { ...state, confirmarSenha: action.payload }

        case types.CHANGE_TELEFONE_USUARIO:
            return { ...state, telefone: action.payload }

        // case types.CHANGE_PERFIL_USUARIO: 
        //     return { ...state, perfilUsuario: action.payload }
            
        // case types.CHANGE_AUTH_USUARIO:
        //     return { ...state, auth: action.payload }

        // case types.RESET_CAMPOS_USUARIO:
        //     
    
        default:
		    return state;

	}
}