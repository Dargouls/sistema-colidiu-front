import React, { Component } from "react";
import { FormGroup, Label, Button } from "reactstrap";

class Confirmation extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Label>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Atenção</span>
        </Label>

        <p>
          Antes de clicar em concluir confira todos os dados cadastrados neste
          BATEU navegando pelas ABAS/JANELAS anteriores. Caso necessário,
          realize as alterações ou complementações necessárias.
        </p>

        <p>
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
            <Label>{`Placa: `}</Label>
              <Label>Possuia Pelicula?</Label>
              <Label>Acionou Air-bag</Label>
              <Label>{`Data de Nascimento: ${this.props.state.birth_date}`}</Label>
              <Label>{`UF: ${this.props.state.uf}`}</Label>
              <Label>Número</Label>
              <Label>Telefone Residencial</Label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Label>Renavam</Label>
              <Label>{`Veículo no momento do fato: ${this.props.state.state_vehicle}`}</Label>
              <Label>{`Possui Seguro? : ${this.props.state.safe_vehicle}`}</Label>
              <Label>{`CPF: ${this.props.state.cpf}`}</Label>
              <Label>{`UF do RG: ${this.props.state.uf_rg}`}</Label>
              <Label>{`Municipio: ${this.props.state.municipality}`}</Label>
              <Label>{`Bairro: ${this.props.state.district}`}</Label>
              <Label>Telefone Comercial</Label>
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
            <Label>0 testemunhas inseridas</Label>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
            <input type="checkbox" value={false} name="check-accept"/>
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
              onClick={() => this.props.handleSendRegister()}
            >
              Enviar
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Confirmation;
