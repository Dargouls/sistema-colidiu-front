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

class GuiaGR extends Component {
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
                  <i className="fa fa-edit"></i>Guia - GR
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                  
                    <Form className="form-horizontal">

                    
                      <FormGroup>
                        <Label>
                          <span style={{fontSize: 25, fontWeight: 'bold'}}>
                            Dados para pesquisa
                          </span>
                          </Label>
                      </FormGroup>

                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Protocolo</Label>
                            <Input type="text" id="name" placeholder='Digite o Protocolo' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">Digito</Label>
                            <Input type="text" id="name" placeholder='Digito do Protocolo' required />
                          </FormGroup>
                          </div>    
                          
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                          
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">RG</Label>
                            <Input type="text" id="name" placeholder='Digite o RG' required />
                          </FormGroup>
                          </div>    
                            
                          <div style={{width: '45%'}}>
                          <FormGroup>
                            <Label htmlFor="name">CPF</Label>
                            <Input type="text" id="name" placeholder='Digite o CPF' required />
                          </FormGroup>
                          </div>    
                          
                        </div>

                      <div style={{display: 'flex', justifyContent: 'center', marginTop: '5%'}}>
                        <Button  color="primary" >Realizar Pesquisa</Button>
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

export default GuiaGR;
