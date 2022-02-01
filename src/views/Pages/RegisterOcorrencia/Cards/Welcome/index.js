import React, { Component } from 'react';
import { FormGroup, FormText, Label, Button } from 'reactstrap';

class Welcome extends Component {
    render() {
        return (
            <div style={{ textAlign: 'justify', padding: 15 }}>
                <FormGroup>
                    <Label>
                        <span style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Cadastre agora seu Registro de ocorrência!
                        </span>
                    </Label>
                    <FormText>
                        <p style={{ fontSize: 15 }}>
                            Observe abaixo os passos do processo de registro do Colidiu:
                        </p>

                        <p style={{ fontSize: 15 }}>
                            1º Passo - Insira Dados e receba e-mail de confirmação.
                        </p>

                        <p style={{ fontSize: 15 }}>
                            2º Passo - Validação do registro e receber email de confirmação.
                        </p>

                        <p style={{ fontSize: 15 }}>
                            3º Passo - Imprima o e receba e-mail de confirmação.`
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
