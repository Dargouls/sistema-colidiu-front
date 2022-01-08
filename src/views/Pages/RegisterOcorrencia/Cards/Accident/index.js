import React, { Component } from 'react';
import {
    Col,
    Button,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

class Accident extends Component {
    constructor(props) {
        super(props);
        this.handleForm = this.handleForm.bind(this);
        // this.handleNextForm = this.props.handleNextForm(this);
        this.state = {
            onchange: false,
        }
    }

    handleForm() {
        // this.props.handleNextForm
        this.setState({ onchange: true });
        let data = this.props.state;

        //adicioanr os dados
        // if (data.number_occupants === "") {
        //     return;
        // }
        console.log('chamooooou')
        this.props.handleNextForm()
    }


    render() {
        return (
            <>
                <FormGroup>
                    <Label htmlFor="name">Cidade</Label>
                    <Input
                        name="city"
                        type="text" id="city_input"
                        placeholder='Digite o nome da cidade'
                        required
                        disabled
                        value={this.props.state.city}
                        onChange={this.props.onChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Tipo de acidente</Label>

                    <Input
                        name="type_accident"
                        type="select"
                        onChange={this.props.onChange}
                        value={this.props.state.type_accident}
                    >
                        <option></option>
                        <option>Abalroamento Lateral</option>
                        <option>Abalroamento Transversal</option>
                        <option>Acidente Complexo</option>
                        <option>Atropelamento</option>
                        <option>Atropelamento Animal</option>
                        <option>Capotamento</option>
                        <option>Choque</option>
                        <option>Colisão Frontal</option>
                        <option>Colisão Traseira</option>
                        <option>Engavetamento</option>
                        <option>Incêndio</option>
                        <option>Nâo Identificado</option>
                        <option>Queda de Moto</option>
                        <option>Queda de Objeto</option>
                        <option>Queda de Passageiro</option>
                        <option>Queda de Veículo</option>
                        <option>Tombamento</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Zona</Label>
                    <Input
                        type="select"
                        name="zone"
                        onChange={this.props.onChange}
                        value={this.props.state.zone}
                    >
                        <option></option>
                        <option>Urbana</option>
                        <option>Rural</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Feriado</Label>
                    <Input
                        type="select"
                        name="feriado"
                        onChange={this.props.onChange}
                        value={this.props.state.zone}
                    >
                        <option></option>
                        <option>Sim</option>
                        <option>Não</option>
                    </Input>

                    <FormGroup>
                        <Label>Envio de imagem</Label>
                        <Input
                            type="file"
                            id="file-input"
                            name="image"
                            onChange={this.props.onChange}
                            value={this.props.state.image}
                            required
                        />
                    </FormGroup>
                </FormGroup>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="secondary" style={{ marginRight: 10 }} onClick={() => this.props.handlePrevForm()}>Voltar</Button>
                    <Button color="primary" onClick={() => this.handleForm()}>Próximo</Button>
                </div>
            </>
        );
    }
}

export default Accident;
