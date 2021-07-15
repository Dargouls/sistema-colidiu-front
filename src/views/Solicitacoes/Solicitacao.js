import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

import solicitacoesData from "./SolicitacoesData";

class Cliente extends Component {
  render() {
    const user = solicitacoesData.find(
      (user) => user.id.toString() === this.props.match.params.id
    );

    const userDetails = user
      ? Object.entries(user)
      : [
          [
            "id",
            <span>
              <i className="text-muted icon-ban"></i> Não encontrado
            </span>,
          ],
        ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1"></i>Cliente
                </strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {userDetails.map(([key, value]) => {
                      return (
                        <tr key={key}>
                          <td>{`${
                            key === "id"
                              ? "Id"
                              : key == "name"
                              ? "Nome"
                              : key == "registered"
                              ? "Registrado em"
                              : key == "status"
                              ? "Pagamento"
                              : key
                          }:`}</td>
                          <td>
                            <strong>{value}</strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cliente;
