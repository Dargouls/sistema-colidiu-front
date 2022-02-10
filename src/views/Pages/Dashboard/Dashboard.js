import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row,
  Table,
  Alert,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Column } from '@ant-design/plots';
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import axios from "axios"

const teste = [
  { "month": "JAN", "type": "Com envolvidos", "value": 14500 },
  { "month": "JAN", "type": "Sem envolvidos", "value": 8500 },
  { "month": "MAR", "type": "Sem envolvidos", "value": 10000 },
  { "month": "ABR", "type": "Com envolvidos", "value": 7000 },
  { "month": "MAI", "type": "Com envolvidos", "value": 9000 },
  { "month": "JUN", "type": "Sem envolvidos", "value": 8500 },
  { "month": "JUL", "type": "Sem envolvidos", "value": 11000 },
  { "month": "SEP", "type": "Com envolvidos", "value": 6000 },
  { "month": "OUT", "type": "Sem envolvidos", "value": 16000 },
  { "month": "NOV", "type": "Sem envolvidos", "value": 16000 },
  { "month": "DEZ", "type": "Sem envolvidos", "value": 6000 },
]

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleSearchOccurrence = this.handleSearchOccurrence.bind(this);
    this.state = {
      data: []
    };
  }

  async handleSearchOccurrence() {
    this.setState({ loading: !this.state.loading })
    try {
      const { data } = await api.get("/occurrences")
      if (data) {
        console.log(data)

        this.setState({ data: data.occurrences })
        this.setState({ loading: !this.state.loading })
      }
      this.setState({ loading: !this.state.loading })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.handleSearchOccurrence();

  }


  render() {

    const config = {
      data: teste,
      xField: 'month',
      yField: 'value',
      seriesField: 'type',
      isGroup: 'true',
      columnStyle: {
        radius: [20, 20, 0, 0],
      },
      color:['#FBC210','#263238'],
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Dashboard
              </CardHeader>
              {/* <Collapse isOpen={this.state.collapse} id="collapseExample"> */}
                <CardBody>
                  <Column {...config} />
                </CardBody>
              {/* </Collapse> */}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
