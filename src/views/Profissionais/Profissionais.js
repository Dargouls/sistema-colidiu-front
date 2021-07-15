import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import profissionaisData from './ProfissionaisData'

function UserRow(props) {
  const profissional = props.user
  const userLink = `/profissionais/${profissional.id}`

  const getBadge = (status) => {
    return status === 'Ativo' ? 'success' :
      status === 'Inativo' ? 'secondary' :
        status === 'Pendente' ? 'warning' :
          status === 'Excluido' ? 'danger' :
            'primary'
  }

  return (
    <tr key={profissional.id.toString()}>
      <th scope="row"><Link to={userLink}>{profissional.id}</Link></th>
      <td><Link to={userLink}>{profissional.name}</Link></td>
      <td>{profissional.registered}</td>
      {/* <td>{profissional.role}</td> */}
      {/* <td><Link to={userLink}><Badge color={getBadge(profissional.status)}>{profissional.status}</Badge></Link></td> */}
    </tr>
  )
}

class Profissionais extends Component {

  render() {

    const userList = profissionaisData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa fa-briefcase"></i> Profissionais
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Registrado em</th>
                      {/* <th scope="col">Funçao</th> */}
                      {/* <th scope="col">Status</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Profissionais;
