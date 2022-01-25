import React, { Component } from 'react';
import { FormGroup, FormText, Label, Button } from 'reactstrap';

class Welcome extends Component {
    render() {
        return (
            <div style={{ textAlign: 'justify', padding: 15 }}>
                <FormGroup>
                    <Label>
                        <span style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Bem vindo(a) ao COLIDIU
                        </span>
                    </Label>
                    <FormText>
                        <p style={{ fontSize: 15 }}>
                            Aviso Importante!
                        </p>

                        <p style={{ fontSize: 15 }}>
                            1. Todas as informações apresentadas estão em consonância com o cadastramento de dados de acidentes de trânsito ocorridos no estado de Alagoas.
                        </p>

                        <p style={{ fontSize: 15 }}>
                            2. Cadastramento dos dados no Sistema COLIDIU é realizado agentes de Trânsito.
                        </p>

                        <p style={{ fontSize: 15 }}>
                            3. Os dados também são cadastrados pelos envolvidos que registram acidentes diretamente no Sistema COLIDIU.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            4. Todos os dados do cidadão que está realizando a consulta serão gravados no sistema.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            Para acessar o histórico será necessário inserir:
                        </p>
                        <p style={{ fontSize: 15 }}>
                            1. O número do RENAVAM;
                        </p>
                    </FormText>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button color="primary" onClick={() => this.props.handleNextForm()}>Próximo</Button>
                    </div>
                </FormGroup>
            </div>
        );
    }
}

export default Welcome;
