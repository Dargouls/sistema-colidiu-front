import React, { Component } from "react";
import { FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import { toast } from "react-toastify";

class Result extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Label>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>Atenção</span>
                </Label>

                <p>
                   Forem encontradas registro(s) com o número do RENAVAM inserido
                </p>
                {/* <p>
                    Antes de clicar em concluir confira todos os dados cadastrados neste
                    BATEU navegando pelas ABAS/JANELAS anteriores. Caso necessário,
                    realize as alterações ou complementações necessárias.
                </p> */}

                {/* <p>
                    Após a conferência dos dados cadastrados ASSINALE a confirmação da
                    veracidade das informações prestadas e clique em CONCLUIR para emitir
                    a Guia de Recolhimento (GR).
                </p>

                <div style={{ color: "red", display: "flex", flexDirection: "column" }}>
                    <span>Importante!</span>

                    <span>
                        Ao clicar em CANCELAR, todos os dados do registro serão excluidos do
                        sistema, retornando assim á tela inicial.
                    </span>
                </div>
                <FormGroup>
                    <Label>
                        <span style={{ fontSize: 20, fontWeight: "bold" }}>
                            Resumo da Ocorrência
                        </span>
                    </Label>
                </FormGroup>

                <Label>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>
                        Dados da Pessoa e do Veículo
                    </span>
                </Label>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                        color="secondary"
                        style={{ marginRight: 10 }}
                        onClick={() => this.props.handlePrevForm()}
                    >
                        Voltar
                    </Button>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            color="secondary"
                            style={{ marginRight: 10 }}
                            onClick={() => alert('Cancelar registro....')}
                        >
                            Cancelar
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => this.handleCheckInfo()}
                        >
                            Enviar
                        </Button>
                    </div>
                </div> */}


            </div>
        );
    }
}

export default Result;
