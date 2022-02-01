import React, { Component } from 'react';
import { toast } from 'react-toastify';
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
        this.handleForm = this.handleForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            type_vehicle: '',
            number_occupants: '',
            color_vehicle: '',
            model_vehicle: '',
            state_vehicle: '',
            category_vehicle: '',
            safe_vehicle: '',
            plate: "",
            renavam: "",
            pellicle: "",
            airbag: "",
            transport_charge_vehicle: '',
            name: '',
            cpf: '',
            sex: '',
            cnh: '',
            rg: '',
            uf_rg: '',
            data_conductor: false,
            cep: '',
            uf: '',
            municipality: '',
            address: '',
            number_address: '',
            complement_address: '',
            district: '',
            phone: '',
            email: '',
            isMoreAuthors: "false",
        }
    }

    handleForm() {
        // this.props.handleNextForm
        this.setState({ onchange: true });
        let data = this.props.state;

        if (data.number_occupants === "") {
            return;
        }
        this.props.handleNextForm()
    }

    save() {
        this.props.setState(this.state);
        toast.success("Dados inseridos com sucesso!")
        this.resetInput();
    }

    resetInput() {
        this.setState(
            {
                type_vehicle: '',
                number_occupants: '',
                color_vehicle: '',
                model_vehicle: '',
                state_vehicle: '',
                category_vehicle: '',
                safe_vehicle: '',
                plate: "",
                renavam: "",
                pellicle: "",
                airbag: "",
                transport_charge_vehicle: '',
                name: '',
                cpf: '',
                sex: '',
                cnh: '',
                rg: '',
                uf_rg: '',
                data_conductor: false,
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
        )
    }

    handleInputChange(e) {
        // console.log(`Campo: ${e.target.name} || ${e.target.value}`)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
                <Label>
                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Dados dos demais Veículos (adicione até 3 veículos com exceção do que foi informado na aba "Veículo e Você")</span>
                </Label>
                {this.props.state.array_vehicle.map((item, index) => (
                    <div key={index} style={{ marginTop: '20px', paddingTop: '30px', borderWidth: 0, borderTopWidth: 3, borderColor: '#c3c3c3', borderStyle: 'dotted ', overflow: 'auto', height: 200 }}>

                        <FormGroup>
                            <Label>Tipo de veículo</Label>
                            <Input
                                type="select"
                                name="type_vehicle"
                                value={item.type_vehicle}
                                disabled
                            >
                                <option></option>
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
                            <Label>Número de ocupantes</Label>
                            <Input
                                type="text"
                                name="number_occupants"
                                placeholder='Digite a quantidade de ocupantes'
                                required
                                value={item.number_occupants}
                                disabled
                            />
                        </FormGroup>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Cor</Label>
                                    <Input
                                        type="select"
                                        name="color_vehicle"
                                        disabled
                                        value={item.color_vehicle}
                                    >
                                        <option></option>
                                        <option>BRANCO</option>
                                        <option>PRETO</option>
                                        <option>CINZA</option>
                                    </Input>
                                </FormGroup>
                            </div>

                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Marca/Modelo</Label>
                                    <Input
                                        type="text"
                                        name="model_vehicle"
                                        placeholder='Digite a marca/modelo'
                                        required
                                        value={item.model_vehicle}
                                        disabled
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <FormGroup>
                            <Label>Veículo no momento do ato</Label>
                            <Input
                                type="select"
                                name="state_vehicle"
                                value={item.state_vehicle}
                                disabled
                            >
                                <option></option>
                                <option>Estacionado</option>
                                <option>Movimento</option>
                                <option>Parado</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Categoria</Label>
                            <Input
                                type="select"
                                name="category_vehicle"
                                value={item.category_vehicle}
                                disabled
                            >
                                <option></option>
                                <option>Aluguel</option>
                                <option>Particular</option>
                                <option>Parado</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Possui seguro?</Label>
                            <Input
                                type="select"
                                name="safe_vehicle"
                                value={item.safe_vehicle}
                                disabled
                            >
                                <option></option>
                                <option>Sim</option>
                                <option>Não</option>
                                <option>Não informado</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Placa</Label>
                            <Input
                                type="text"
                                name="plate"
                                placeholder="Digite a placa do veículo"
                                disabled
                                value={item.plate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Renavam</Label>
                            <Input
                                type="text"
                                name="renavam"
                                placeholder="Digite o RENAVAM do veículo"
                                disabled
                                value={item.renavam}

                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Possui Pelicula?</Label>
                            <Input
                                type="select"
                                name="pellicle"
                                disabled
                                value={item.pellicle}
                            >
                                <option></option>
                                <option>Sim</option>
                                <option>Não</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Acionou o Airbag?</Label>
                            <Input
                                type="select"
                                name="airbag"
                                disabled
                                value={item.airbag}
                            >
                                <option></option>
                                <option>Sim</option>
                                <option>Não</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Transportava carga?</Label>
                            <Input
                                type="select"
                                name="transport_charge_vehicle"
                                value={item.transport_charge_vehicle}
                                disabled
                            >
                                <option></option>
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
                                    <Label>Nome</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder='Digite nome'
                                        required
                                        value={item.name}
                                        disabled
                                        disabled={this.data_conductor}
                                    />
                                </FormGroup>
                            </div>

                            <div style={{ width: '45%' }}>

                                <FormGroup>
                                    <Label>CPF</Label>
                                    <Input
                                        type="text"
                                        name="cpf"
                                        placeholder='Digite o CPF'
                                        required
                                        value={item.cpf}
                                        disabled
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <FormGroup>
                            <Label>Sexo</Label>
                            <Input
                                type="select"
                                name="sex"
                                value={item.sex}
                                disabled
                            >
                                <option></option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                                <option>Não informado</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>CNH</Label>
                            <Input
                                type="text"
                                name="cnh"
                                placeholder='Digite o sua CNH'
                                required
                                value={item.cnh}
                                disabled
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>RG</Label>
                            <Input
                                type="text"
                                name="rg"
                                placeholder='Digite o seu RG'
                                required
                                value={item.rg}
                                disabled
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>UF RG</Label>
                            <Input
                                type="select"
                                name="uf_rg"
                                placeholder="Selecione o estado"
                                required
                                value={item.uf_rg}
                                disabled
                            >
                                <option></option>
                                {estados.UF.map((item, index) => {
                                    return <option key={index}>{item.nome}</option>
                                })}
                            </Input>
                        </FormGroup>

                        {/* //OBSERVAÇÃO */}
                        <FormGroup check className="radio">
                            <Input
                                className="form-check-input"
                                type="checkbox"
                                id="checkbox1"
                                name="data_conductor"
                                value={item.data_conductor}
                                onChange={() => {
                                    console.log(this.state.data_conductor)
                                    this.setState({ data_conductor: !this.state.data_conductor })
                                }}
                            />
                            <Label>Não houve a possibilidade de coletar dados do condutor </Label>
                        </FormGroup>

                        <Label>
                            <span style={{ fontSize: 20, fontWeight: 'bold' }}>Endereço do Condutor / Responsável</span>
                            <span> (O preenchimento destes campos não são obrigatórios)</span>
                        </Label>

                        <FormGroup>
                            <Label>CEP</Label>
                            <Input
                                type="text"
                                name="cep"
                                placeholder='Digite o CEP'
                                required
                                value={item.cep}
                                disabled
                            />
                        </FormGroup>


                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                            <div style={{ width: '45%' }}>

                                <FormGroup>
                                    <Label>UF</Label>
                                    <Input
                                        type="select"
                                        name="uf"
                                        placeholder="Selecione o estado"
                                        required
                                        value={item.uf}
                                        disabled
                                    >
                                        <option></option>
                                        {estados.UF.map((item, index) => {
                                            return <option key={index}>{item.nome}</option>
                                        })}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Municipio</Label>
                                    <Input
                                        type="text"
                                        name="municipality"
                                        placeholder='Digite o Municipio'
                                        value={item.municipality}
                                        required
                                        disabled
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                            <div style={{ width: '70%' }}>
                                <FormGroup>
                                    <Label>Endereço</Label>
                                    <Input
                                        type="text"
                                        name="address"
                                        placeholder='Digite o Endereço'
                                        required
                                        value={item.address}
                                        disabled
                                    />
                                </FormGroup>
                            </div>
                            <FormGroup>
                                <Label>Numero</Label>
                                <Input
                                    type="text"
                                    name="number_address"
                                    placeholder='Digite o número'
                                    required
                                    value={item.number_address}
                                    disabled
                                />
                            </FormGroup>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Complemento</Label>
                                    <Input
                                        type="text"
                                        name="complement_address"
                                        placeholder='Digite o complemento'
                                        required
                                        value={item.complement_address}
                                        disabled
                                    />
                                </FormGroup>
                            </div>

                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Bairro</Label>
                                    <Input
                                        type="text"
                                        name="district"
                                        placeholder='Digite o Bairro'
                                        required
                                        value={item.district}
                                        disabled
                                    />
                                </FormGroup>
                            </div>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Telefone Celular</Label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        placeholder='(82) 99999-9999'
                                        required
                                        value={item.phone}
                                        disabled
                                    />
                                </FormGroup>
                            </div>

                            <div style={{ width: '45%' }}>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        value={item.email}
                                        placeholder='seuemail@email.com'
                                        required
                                        disabled
                                    />
                                </FormGroup>
                            </div>
                        </div>

                    </div>
                ))}
                {!this.props.disabled &&

                    <>
                        <FormGroup>
                            <Label>Possui outros veículos envolvidos ?</Label>
                            <Input
                                type="select"
                                name="isMoreAuthors"
                                onChange={e => this.setState({ isMoreAuthors: e.target.value })}
                                value={this.state.isMoreAuthors}
                            >
                                <option value='false'>Não</option>
                                <option value='true'>Sim</option>
                            </Input>
                        </FormGroup>

                        {this.state.isMoreAuthors === 'true' &&
                            <>
                                <FormGroup>
                                    <Label>Tipo de veículo</Label>
                                    <Input
                                        type="select"
                                        name="type_vehicle"
                                        value={this.state.type_vehicle}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
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
                                    <Label>Número de ocupantes</Label>
                                    <Input
                                        type="text"
                                        name="number_occupants"
                                        placeholder='Digite a quantidade de ocupantes'
                                        required
                                        value={this.state.number_occupants}
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Cor</Label>
                                            <Input
                                                type="select"
                                                name="color_vehicle"
                                                onChange={this.handleInputChange}
                                                value={this.state.color_vehicle}
                                            >
                                                <option></option>
                                                <option>BRANCO</option>
                                                <option>PRETO</option>
                                                <option>CINZA</option>
                                            </Input>
                                        </FormGroup>
                                    </div>

                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Marca/Modelo</Label>
                                            <Input
                                                type="text"
                                                name="model_vehicle"
                                                placeholder='Digite a marca/modelo'
                                                required
                                                value={this.state.model_vehicle}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <FormGroup>
                                    <Label>Veículo no momento do ato</Label>
                                    <Input
                                        type="select"
                                        name="state_vehicle"
                                        value={this.state.state_vehicle}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
                                        <option>Estacionado</option>
                                        <option>Movimento</option>
                                        <option>Parado</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Categoria</Label>
                                    <Input
                                        type="select"
                                        name="category_vehicle"
                                        value={this.state.category_vehicle}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
                                        <option>Aluguel</option>
                                        <option>Particular</option>
                                        <option>Parado</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Possui seguro?</Label>
                                    <Input
                                        type="select"
                                        name="safe_vehicle"
                                        value={this.state.safe_vehicle}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                        <option>Não informado</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Placa</Label>
                                    <Input
                                        type="text"
                                        name="plate"
                                        placeholder="Digite a placa do veículo"
                                        onChange={this.handleInputChange}
                                        value={this.state.plate}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Renavam</Label>
                                    <Input
                                        type="text"
                                        name="renavam"
                                        placeholder="Digite o RENAVAM do veículo"
                                        onChange={this.handleInputChange}
                                        value={this.state.renavam}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Possui Pelicula?</Label>
                                    <Input
                                        type="select"
                                        name="pellicle"
                                        onChange={this.handleInputChange}
                                        value={this.state.pellicle}
                                    >
                                        <option></option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Acionou o Airbag?</Label>
                                    <Input
                                        type="select"
                                        name="airbag"
                                        onChange={this.handleInputChange}
                                        value={this.state.airbag}
                                    >
                                        <option></option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Transportava carga?</Label>
                                    <Input
                                        type="select"
                                        name="transport_charge_vehicle"
                                        value={this.state.transport_charge_vehicle}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
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
                                            <Label>Nome</Label>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder='Digite nome'
                                                required
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                                disabled={this.data_conductor}
                                            />
                                        </FormGroup>
                                    </div>

                                    <div style={{ width: '45%' }}>

                                        <FormGroup>
                                            <Label>CPF</Label>
                                            <Input
                                                type="text"
                                                name="cpf"
                                                placeholder='Digite o CPF'
                                                required
                                                value={this.state.cpf}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <FormGroup>
                                    <Label>Sexo</Label>
                                    <Input
                                        type="select"
                                        name="sex"
                                        value={this.state.sex}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                        <option>Não informado</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>CNH</Label>
                                    <Input
                                        type="text"
                                        name="cnh"
                                        placeholder='Digite o sua CNH'
                                        required
                                        value={this.state.cnh}
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>RG</Label>
                                    <Input
                                        type="text"
                                        name="rg"
                                        placeholder='Digite o seu RG'
                                        required
                                        value={this.state.rg}
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>UF RG</Label>
                                    <Input
                                        type="select"
                                        name="uf_rg"
                                        placeholder="Selecione o estado"
                                        required
                                        value={this.state.uf_rg}
                                        onChange={this.handleInputChange}
                                    >
                                        <option></option>
                                        {estados.UF.map((item, index) => {
                                            return <option key={index}>{item.nome}</option>
                                        })}
                                    </Input>
                                </FormGroup>

                                {/* //OBSERVAÇÃO */}
                                <FormGroup check className="radio">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkbox1"
                                        name="data_conductor"
                                        value={this.state.data_conductor}
                                        onChange={() => {
                                            console.log(this.state.data_conductor)
                                            this.setState({ data_conductor: !this.state.data_conductor })
                                        }}
                                    />
                                    <Label>Não houve a possibilidade de coletar dados do condutor </Label>
                                </FormGroup>

                                <Label>
                                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Endereço do Condutor / Responsável</span>
                                    <span> (O preenchimento destes campos não são obrigatórios)</span>
                                </Label>

                                <FormGroup>
                                    <Label>CEP</Label>
                                    <Input
                                        type="text"
                                        name="cep"
                                        placeholder='Digite o CEP'
                                        required
                                        value={this.state.cep}
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>


                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                                    <div style={{ width: '45%' }}>

                                        <FormGroup>
                                            <Label>UF</Label>
                                            <Input
                                                type="select"
                                                name="uf"
                                                placeholder="Selecione o estado"
                                                required
                                                value={this.state.uf}
                                                onChange={this.handleInputChange}
                                            >
                                                <option></option>
                                                {estados.UF.map((item, index) => {
                                                    return <option key={index}>{item.nome}</option>
                                                })}
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Municipio</Label>
                                            <Input
                                                type="text"
                                                name="municipality"
                                                placeholder='Digite o Municipio'
                                                value={this.state.municipality}
                                                required
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                                    <div style={{ width: '70%' }}>
                                        <FormGroup>
                                            <Label>Endereço</Label>
                                            <Input
                                                type="text"
                                                name="address"
                                                placeholder='Digite o Endereço'
                                                required
                                                value={this.state.address}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>
                                    <FormGroup>
                                        <Label>Numero</Label>
                                        <Input
                                            type="text"
                                            name="number_address"
                                            placeholder='Digite o número'
                                            required
                                            value={this.state.number_address}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Complemento</Label>
                                            <Input
                                                type="text"
                                                name="complement_address"
                                                placeholder='Digite o complemento'
                                                required
                                                value={this.state.complement_address}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>

                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Bairro</Label>
                                            <Input
                                                type="text"
                                                name="district"
                                                placeholder='Digite o Bairro'
                                                required
                                                value={this.state.district}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Telefone Celular</Label>
                                            <Input
                                                type="text"
                                                name="phone"
                                                placeholder='(82) 99999-9999'
                                                required
                                                value={this.state.phone}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>

                                    <div style={{ width: '45%' }}>
                                        <FormGroup>
                                            <Label>Email</Label>
                                            <Input
                                                type="text"
                                                name="email"
                                                value={this.state.email}
                                                placeholder='seuemail@email.com'
                                                required
                                                onChange={this.handleInputChange}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>


                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: '5%' }}>
                                    <div style={{ marginRight: '5%' }}>
                                        <Button
                                            color="primary"
                                            onClick={this.save}
                                        >
                                            Adicionar Veículo
                                        </Button>
                                    </div>

                                    <Button color="primary" onClick={this.resetInput}>Limpar</Button>

                                </div>
                            </>
                        }
                    </>
                }
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="secondary" style={{ marginRight: 10 }} onClick={() => this.props.handlePrevForm()}>Voltar</Button>
                    <Button color="primary" onClick={() => this.handleForm()}>Próximo</Button>
                </div>
            </>
        );
    }
}

export default MoreInformation;
