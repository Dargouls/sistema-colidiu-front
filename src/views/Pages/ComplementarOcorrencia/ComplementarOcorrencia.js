import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  Label,
  Row,
  Input
} from 'reactstrap';

class ComplementarOcorrencia extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      forms: 1
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">            
        <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Complementar Ocorrencia
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                  
                    <Form className="form-horizontal">

                    
                      <FormGroup>
                        <Label>
                          <span style={{fontSize: 25, fontWeight: 'bold'}}>
                          Ocorrências vinculadas ao CPF
                          </span>
                          </Label>
                      </FormGroup>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#fcf8e3', padding: 10, borderRadius: 7}}>
                        <Label>
                          <span style={{fontSize: 14, fontWeight: 'regular'}}>
                          Atenção: Nenhum registro encontrado com os dados inseridos.
                          </span>
                          </Label>
                        </div>
                    </Form>
                    
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ComplementarOcorrencia;
