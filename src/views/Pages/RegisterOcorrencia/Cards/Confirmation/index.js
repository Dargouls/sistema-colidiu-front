import React, { Component } from 'react';
import {
    FormGroup,
    Label,
    Button
} from 'reactstrap';

class Confirmation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Label>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Atenção</span>
                </Label>

                <p>Antes de clicar em concluir confira todos os dados cadastrados neste BATEU navegando pelas ABAS/JANELAS anteriores. Caso necessário, realize as alterações ou complementações necessárias.</p>

                <p>Após a conferência dos dados cadastrados ASSINALE a confirmação da veracidade das informações prestadas e clique em CONCLUIR para emitir a Guia de Recolhimento (GR).</p>

                <div style={{ color: 'red', display: 'flex', flexDirection: 'column' }}>
                    <span>Importante!</span>

                    <span>Ao clicar em CANCELAR, todos os dados do registro serão excluidos do sistema, retornando assim á tela inicial.</span>
                </div>
                <FormGroup>

                    <Label>
                        <span style={{ fontSize: 20, fontWeight: 'bold' }}>Resumo da Ocorrência</span>
                    </Label>
                </FormGroup>

                <Label>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Dados da Pessoa e do Veículo</span>
                </Label>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="secondary" style={{ marginRight: 10 }} onClick={() => this.props.handlePrevForm()}>Voltar</Button>
                    <Button color="primary" onClick={() => this.props.sendRegister}>Enviar</Button>
                </div>
            </>
        );
    }
}

export default Confirmation;
