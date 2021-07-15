import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

import solicitacoesData from "./SolicitacoesData";

function UserRow(props) {
  const cliente = props.user;
  const userLink = `/solicitacoes/${cliente.id}`;

  const getBadge = (status) => {
    return status === "Ativo"
      ? "success"
      : status === "Inativo"
      ? "secondary"
      : status === "Pendente"
      ? "warning"
      : status === "Excluido"
      ? "danger"
      : "primary";
  };

  return (
    <tr key={cliente.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{cliente.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{cliente.name}</Link>
      </td>
      <td>{cliente.registered}</td>
      {/* <td>{cliente.role}</td> */}
      <td>
        <Link to={userLink}>
          <Badge color={getBadge(cliente.status)}>{cliente.status}</Badge>
        </Link>
      </td>
    </tr>
  );
}

class Clientes extends Component {
  render() {
    const userList = solicitacoesData.filter((user) => user.id < 10);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-users"></i> Solicitações de Carteiras
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Registrado em</th>
                      {/* <th scope="col">Funçao</th> */}
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => (
                      <UserRow key={index} user={user} />
                    ))}
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

export default Clientes;
