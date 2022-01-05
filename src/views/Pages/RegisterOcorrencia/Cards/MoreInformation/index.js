import React, { Component } from 'react';
import {
    Col,
    FormGroup,
    Input,
    Label,
    Button,
} from 'reactstrap';

import { estados } from '../../estados';

class MoreInformation extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddVehicle = this.handleAddVehicle.bind(this);
        this.state = {
            type_vehicle: '',
            number_occupants: '',
            color_vehicle: '',
            model_vehicle: '',
            state_vehicle: '',
            category_vehicle: '',
            safe_vehicle: '',
            transport_charge_vehicle: '',
            name: '',
            cpf: '',
            sex: '',
            cnh: '',
            rg: '',
            uf_rg: '',
            data_conductor?: '',
            cep: '',
            uf: '',
            municipality: '',
            address: '',
            number_address: '',
            complement_address: '',
            district: '',
            phone: '',
            email: '',
        }
    }

    handleInputChange(e) {
        console.log(`Campo: ${e.target.name} || ${e.target.value}`)
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    
    handleAddVehicle() {
        //Add new vehicle into array_vehicle
    }

    render() {
        return (
            <>
                <Label>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Dados dos demais Veículos (adicione até 3 veículos com exceção do que foi informado na aba "Veículo e Você")</span>
                </Label>

                <FormGroup>
                    <Label>Tipo de veículo</Label>
                    <Input 
                        type="select" 
                        name="type_vehicle"
                        value={this.state.type_vehicle}
                        onChange
                    >
                        <option>Selecione</option>
                        <option>Automóvel</option>
                        <option>Bicicleta</option>
                        <option>Caminhão</option>
                        <option>Charrete</option>
                        <option>Motocicleta</option>
                        <option>Patinete</option>
                        <option>Patins</option>
                        <option>Ônibus</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="name">Número de ocupantes</Label>
                    <Input type="text" name="" placeholder='Digite a quantidade de ocupantes' required />
                </FormGroup>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <div style={{ width: '45%' }}>

                        <FormGroup>
                            <Label>Cor</Label>
                            <Input type="select" name="ccyear">
                                <option>BRANCO</option>
                                <option>PRETO</option>
                                <option>CINZA</option>
                            </Input>
                        </FormGroup>
                    </div>

                    <div style={{ width: '45%' }}>

                        <FormGroup>
                            <Label htmlFor="name">Marca/Modelo</Label>
                            <Input type="text" name="" placeholder='Digite a marca/modelo' required />
                        </FormGroup>
                    </div>

                </div>


                <FormGroup>
                    <Label>Veículo no momento do ato</Label>
                    <Input type="select" name="ccyear">
                        <option>Estacionado</option>
                        <option>Movimento</option>
                        <option>Parado</option>

                    </Input>
                </FormGroup>


                <FormGroup>
                    <Label>Categoria</Label>
                    <Input type="select" name="ccyear">
                        <option>Aluguel</option>
                        <option>Particular</option>
                        <option>Parado</option>
                    </Input>
                </FormGroup>


                <FormGroup>
                    <Label>Possui seguro?</Label>
                    <Input type="select" name="ccyear">
                        <option>Sim</option>
                        <option>Não</option>
                        <option>Não informado</option>
                    </Input>
                </FormGroup>


                <FormGroup>
                    <Label>Transportava carga?</Label>
                    <Input type="select" name="ccyear">
                        <option>Bruta</option>
                        <option>Granel</option>
                        <option>Não</option>
                        <option>Perigosa</option>
                        <option>Viva</option>
                    </Input>
                </FormGroup>

                <Label>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Dados do Condutor / Responsável</span>
                    <span> (O preenchimento destes campos não são obrigatórios)</span>
                </Label>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <div style={{ width: '45%' }}>

                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" name="" placeholder='Digite nome' required />
                        </FormGroup>
                    </div>

                    <div style={{ width: '45%' }}>

                        <FormGroup>
                            <Label htmlFor="name">CPF</Label>
                            <Input type="text" name="" placeholder='Digite o CPF' required />
                        </FormGroup>
                    </div>

                </div>

                <FormGroup>
                    <Label>Sexo</Label>
                    <Input type="select" name="ccyear">
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Não informado</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="name">CNH</Label>
                    <Input type="text" name="" placeholder='Digite o sua CNH' required />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="name">RG</Label>
                    <Input type="text" name="" placeholder='Digite o seu RG' required />
                </FormGroup>


                <FormGroup>
                    <Label>UF RG</Label>
                    <Input type="select" name="ccyear" placeholder="Selecione o estado">
                        {estados.UF.map((item) => {
                            return <option>{item.nome}</option>
                        })}
                    </Input>
                </FormGroup>




                <FormGroup check className="radio">
                    <Input className="form-check-input" type="checkbox" id="checkbox1" name="radios" value="option1" />
                    <Label>Não houve a possibilidade de coletar dados do condutor </Label>
                </FormGroup>

                <Label>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Endereço do Condutor / Responsável</span>
                    <span> (O preenchimento destes campos não são obrigatórios)</span>
                </Label>

                <FormGroup>
                    <Label htmlFor="name">CEP</Label>
                    <Input type="text" name="" placeholder='Digite o CEP' required />
                </FormGroup>


                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <div style={{ width: '45%' }}>

                        <FormGroup>
                            <Label>UF</Label>
                            <Input type="select" name="ccyear" placeholder="Selecione o estado">
                                {estados.UF.map((item) => {
                                    return <option>{item.nome}</option>
                                })}
                            </Input>
                        </FormGroup>
                    </div>
                    <div style={{ width: '45%' }}>

                        <FormGroup>
                            <Label htmlFor="name">Municipio</Label>
                            <Input type="text" name="" placeholder='Digite o Municipio' required />
                        </FormGroup>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <div style={{ width: '70%' }}>
                        <FormGroup>
                            <Label htmlFor="name">Endereço</Label>
                            <Input type="text" name="" placeholder='Digite o Endereço' required />
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Label htmlFor="name">Numero</Label>
                        <Input type="text" name="" placeholder='Digite o número' required />
                    </FormGroup>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <div style={{ width: '45%' }}>
                        <FormGroup>
                            <Label htmlFor="name">Complemento</Label>
                            <Input type="text" name="" placeholder='Digite o complemento' required />
                        </FormGroup>
                    </div>

                    <div style={{ width: '45%' }}>
                        <FormGroup>
                            <Label htmlFor="name">Bairro</Label>
                            <Input type="text" name="" placeholder='Digite o Bairro' required />
                        </FormGroup>
                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                    <div style={{ width: '45%' }}>
                        <FormGroup>
                            <Label htmlFor="name">Telefone Celular</Label>
                            <Input type="text" name="" placeholder='(82) 99999-9999' required />
                        </FormGroup>
                    </div>

                    <div style={{ width: '45%' }}>
                        <FormGroup>
                            <Label htmlFor="name">Email</Label>
                            <Input type="text" name="" placeholder='seuemail@email.com' required />
                        </FormGroup>
                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '5%' }}>
                    <div style={{ marginRight: '5%' }}>
                        <Button
                            color="primary"
                            onClick={this.handleAddVehicle}
                        >
                            Adicionar Veíuculo
                        </Button>
                    </div>

                    <Button color="primary" >Limpar</Button>

                </div>
            </>
        );
    }
}

export default MoreInformation;
