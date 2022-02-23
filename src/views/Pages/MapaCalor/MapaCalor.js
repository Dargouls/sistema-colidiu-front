import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import HeatMap from '../../../components/HeatMap';



class MapaCalor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Dashboard
              </CardHeader>
              <CardBody>
                <HeatMap/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MapaCalor;
