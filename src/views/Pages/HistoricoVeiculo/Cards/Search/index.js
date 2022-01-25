import React, { Component } from "react";
import {
    Form,
    Button,
    FormGroup,
    Input,
    Label,
    FormFeedback,

} from "reactstrap";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Form>
                <Label>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>
                        Dados para pesquisa
                    </span>
                </Label>
                <FormGroup>
                    <Label>Renavam</Label>
                    <Input
                        type="number"
                        name="renavam"
                        placeholder="Digite o RENAVAM do veículo"
                        onChange={this.props.onChange}
                    // disabled={this.props.disabled}
                    // value={this.props.state.renavam}
                    // invalid={
                    //     this.props.state.renavam === "" && this.state.onchange
                    // }
                    />
                    <FormFeedback>Preencha o campo!</FormFeedback>
                </FormGroup>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        color="secondary"
                        style={{ marginRight: 10 }}
                        onClick={() => this.props.handlePrevForm()}
                    >
                        Voltar
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => this.props.handleSearchHistory()}
                    >
                        Procurar
                    </Button>
                </div>
            </Form >
        );
    }
}

export default Search;
