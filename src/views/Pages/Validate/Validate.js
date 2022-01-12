import React, { Component } from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Collapse,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Row,
    Spinner,
    Table
} from "reactstrap";

import { toast } from "react-toastify";
import { api } from "../../../services/api";

class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ocorrence: {}
        }
    }

    async handleGetOcurrence() {
        // this.setState({loading: true})
        let ocorrence = this.props.match.params;
        console.log('id:' ,ocorrence)
        try {
            const { data } = await api.get(`/occurrences/${ocorrence?.id}`)
            console.log('ocurrence: ',data)
            // toast.success("Lista de ocorrências carregadas com sucesso!")
            // this.setState({ occurrence: data.occurrences })
            // this.setState({loading: true})
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
            this.setState({loading: true})
        }
    }

    componentWillMount() {
        this.handleGetOcurrence()
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-edit"></i>Lista de ocorrências
                            </CardHeader>
                            {/* <Collapse isOpen={this.state.collapse} id="collapseExample"> */}
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label
                                            for="exampleEmail"
                                            sm={2}
                                        >
                                            Email
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="with a placeholder"
                                                type="email"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="examplePassword"
                                            sm={2}
                                        >
                                            Password
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="password placeholder"
                                                type="password"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="exampleSelect"
                                            sm={2}
                                        >
                                            Select
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="select"
                                            >
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                                <option>
                                                    3
                                                </option>
                                                <option>
                                                    4
                                                </option>
                                                <option>
                                                    5
                                                </option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="exampleSelectMulti"
                                            sm={2}
                                        >
                                            Select Multiple
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="exampleSelectMulti"
                                                multiple
                                                name="selectMulti"
                                                type="select"
                                            >
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                                <option>
                                                    3
                                                </option>
                                                <option>
                                                    4
                                                </option>
                                                <option>
                                                    5
                                                </option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="exampleText"
                                            sm={2}
                                        >
                                            Text Area
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="exampleText"
                                                name="text"
                                                type="textarea"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="exampleFile"
                                            sm={2}
                                        >
                                            File
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                id="exampleFile"
                                                name="file"
                                                type="file"
                                            />
                                            <FormText>
                                                This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                                            </FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup
                                        row
                                        tag="fieldset"
                                    >
                                        <legend className="col-form-label col-sm-2">
                                            Radio Buttons
                                        </legend>
                                        <Col sm={10}>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    Option one is this and that—be sure to include why it's great
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    Option two can be something else and selecting it will deselect option one
                                                </Label>
                                            </FormGroup>
                                            <FormGroup
                                                check
                                                disabled
                                            >
                                                <Input
                                                    disabled
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    Option three is disabled
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="checkbox2"
                                            sm={2}
                                        >
                                            Checkbox
                                        </Label>
                                        <Col
                                            sm={{
                                                size: 10
                                            }}
                                        >
                                            <FormGroup check>
                                                <Input
                                                    id="checkbox2"
                                                    type="checkbox"
                                                />
                                                {' '}
                                                <Label check>
                                                    Check me out
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                        row
                                    >
                                        <Col
                                            sm={{
                                                offset: 2,
                                                size: 10
                                            }}
                                        >
                                            <Button>
                                                Submit
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            {/* </Collapse> */}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Validation;
