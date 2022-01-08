import React, { Component } from 'react';
import { FormGroup, FormText, Label, Button } from 'reactstrap';

class Welcome extends Component {
    render() {
        return (
            <div style={{ textAlign: 'justify', padding: 15 }}>
                <FormGroup>
                    <Label>
                        <span style={{ fontSize: 25, fontWeight: 'bold' }}>
                            Bem vindo ao Colidiu!
                        </span>
                    </Label>
                    <FormText>
                        <p style={{ fontSize: 15 }}>
                            Este sistema permite somente o registro de boletins de acidentes que ocasionaram apenas danos materiais, não sendo possível a inserção e cadastro de pessoas feridas.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            Poderão ser registrados acidentes ocorridos no interior de condomínios, postos de combustíveis, estacionamentos de mercados, lojas, shoppings, etc, e o endereço informado no registro do acidente deve ser o mesmo do estabelecimento ou condomínio. Devendo na descrição dos fatos, relatar que o acidente se deu dentro de tal área.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            Observe abaixo os passos do processo de registro do Colidiu:
                        </p>

                        <p style={{ fontSize: 15 }}>
                            1º Passo - Insira Dados e receba e-mail de confirmação.
                        </p>

                        <p style={{ fontSize: 15 }}>
                            2º Passo - Pague a GR e receba e-mail de confirmação.
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
