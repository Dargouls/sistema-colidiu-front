import React, { Component } from "react";
import { FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import { toast } from "react-toastify";

class Confirmation extends Component {

  constructor(props) {
    super(props);
    this.handleCheckInfo = this.handleCheckInfo.bind(this);
    this.handleCheckStatus = this.handleCheckStatus.bind(this);
    this.state = {
      modal: false,
      checked: false,
      message: '',
    }
  }

  handleCheckInfo() {
    if (this.state.checked) {
      this.props.handleSendRegister()
    } else {
      toast.warning("Confirme a veracidade das informações prestadas!")
    }
  }

  handleCheckStatus() {
    if (this.state.message !== '') {
      this.props.handleSendStatus("Reprovado", this.state.message)
    } else {
      toast.warning("Escreva os motivos pela qual a ocorrência foi negada!")
    }
  }

  componentDidMount() {
    console.log(this.state.checked)
  }

  render() {
    return (
      <div>
        {!this.props.disabled ?
          <>
            <Label>
              <span style={{ fontSize: 20, fontWeight: "bold" }}>Atenção</span>
            </Label>

            <p>
              Antes de clicar em concluir confira todos os dados cadastrados 
              navegando pelas ABAS/JANELAS anteriores. Caso necessário,
              realize as alterações ou complementações necessárias.
            </p>

            <p>
              Após a conferência dos dados cadastrados ASSINALE a confirmação da
              veracidade das informações prestadas e clique em CONCLUIR para cadastrar
              sua ocorrência.
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

            <FormGroup>
              <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Label>{`Tipo do Veículo: ${this.props.state.type_vehicle}`}</Label>
                  <Label>{`Nº Ocupantes: ${this.props.state.number_occupants}`}</Label>
                  <Label>{`Carga: `}</Label>
                  <Label>{`CNH: ${this.props.state.cnh}`}</Label>
                  <Label>{`RG: ${this.props.state.rg}`}</Label>
                  <Label>{`Nome: ${this.props.state.name}`}</Label>
                  <Label>{`CEP: ${this.props.state.cep}`}</Label>
                  <Label>{`Endereço: ${this.props.state.address}`}</Label>
                  <Label>{`Telefone Celular: ${this.props.state.phone}`}</Label>
                  <Label>{`E-mail: ${this.props.state.email}`}</Label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Label>{`Placa: ${this.props.state.plate}`}</Label>
                  <Label>{`Possuia Pelicula? ${this.props.state.pellicle}`}</Label>
                  <Label>{`Acionou Air-bag? ${this.props.state.airbag}`}</Label>
                  <Label>{`Data de Nascimento: ${this.props.state.birth_date}`}</Label>
                  <Label>{`UF: ${this.props.state.uf}`}</Label>
                  {/* <Label>Número</Label>
                  <Label>Telefone Residencial</Label> */}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Label>{`Renavam ${this.props.state.renavam}`}</Label>
                  <Label>{`Veículo no momento do fato: ${this.props.state.state_vehicle}`}</Label>
                  <Label>{`Possui Seguro? : ${this.props.state.safe_vehicle}`}</Label>
                  <Label>{`CPF: ${this.props.state.cpf}`}</Label>
                  <Label>{`UF do RG: ${this.props.state.uf_rg}`}</Label>
                  <Label>{`Municipio: ${this.props.state.municipality}`}</Label>
                  <Label>{`Bairro: ${this.props.state.district}`}</Label>
                  {/* <Label>Telefone Comercial</Label> */}
                </div>
              </div>
            </FormGroup>

            <FormGroup>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Label>
                  <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    Veículos
                  </span>
                </Label>

                <Label>{`${this.props.state.array_vehicle.length} veículos inseridas`}</Label>
              </div>
            </FormGroup>
            <FormGroup>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label>

                  <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    Testemunhas
                  </span>
                </Label>

                <Label>{`${this.props.state.array_witness.length} testemunhas inseridas`}</Label>
              </div>
            </FormGroup>

            <Label>
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                Dados do Acidente
              </span>
            </Label>

            <FormGroup>
              <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Label>Dados do Fato</Label>
                  <Label>Tipo do Acidente</Label>
                  <Label>Endereço</Label>
                  <Label>Esquina com</Label>
                  <Label>Versao</Label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Label>Hora do Fato</Label>
                  <Label>Feriado</Label>
                  <Label>Número</Label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Label>Zona</Label>
                  <Label>Bairro</Label>
                </div>
              </div>
            </FormGroup>

            <FormGroup>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                  <input
                    type="checkbox"
                    name="check-accept"
                    value={this.state.checked}
                    onChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <p> CONFIRMO A VERACIDADE DAS INFORMAÇÕES PRESTADAS</p>
                </div>
              </div>
            </FormGroup>
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
            </div>

          </>
          :
          <>
            <Label>
              <span style={{ fontSize: 20, fontWeight: "bold" }}>Atenção</span>
            </Label>

            <p>
              Antes de clicar em "Aprovar" ou "Reprovar" confira todos os dados cadastrados neste
              BATEU navegando pelas ABAS/JANELAS anteriores.
            </p>

            <p>
              Após a conferência dos dados cadastrados CLIQUE na opção correspondente a análise realizada.
            </p>

            <Modal
              isOpen={this.state.modal}
            // toggle={function noRefCheck() { }}
            >
              <ModalHeader toggle={() => this.setState({ modal: !this.state.modal })}>
                Justificativa
              </ModalHeader>
              <ModalBody>

                <FormGroup>
                  <Label for="exampleText">Descreva o motivo pela qual foi negado</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    rows="10"
                    style={{ resize: 'none', overflow: 'auto' }}
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  />
                </FormGroup>

              </ModalBody>
              <ModalFooter>
                <Button onClick={() => this.setState({ modal: !this.state.modal })}>
                  Cancelar
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.handleCheckStatus()}
                >
                  Confirmar Reprovação
                </Button>
              </ModalFooter>
            </Modal>

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
                  color="danger"
                  style={{ marginRight: 10 }}
                  onClick={() => this.setState({ modal: true })}
                >
                  Reprovar
                </Button>
                <Button
                  color="success"
                  onClick={() => this.props.handleSendStatus("Aprovado", "")}
                >
                  Aprovar
                </Button>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
}

export default Confirmation;
