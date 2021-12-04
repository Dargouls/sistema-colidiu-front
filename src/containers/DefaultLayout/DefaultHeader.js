import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo-smtt.png'
import sygnet from '../../assets/img/brand/sygnet.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 50, height: 50, alt: 'SMTT Logo'}}
          minimized={{ src: logo, width: 30, height: 30, alt: 'SMTT Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Painel</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/agenda" className="nav-link">Agenda</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Pacientes</Link>{/*Users
          </NavItem>
          /* <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret>
                Gestão
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/financas" className="nav-link">Finanças</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/relatorios" className="nav-link">Relatórios</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/img_user.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              {/* <DropdownItem header tag="div" className="text-center"><strong>Minha Conta</strong></DropdownItem> */}
              {/* <DropdownItem><i className="fa fa-bell-o"></i> Atualizações<Badge color="info">42</Badge></DropdownItem> */}
              {/* <DropdownItem><i className="fa fa-envelope-o"></i> Mensagens<Badge color="success">42</Badge></DropdownItem> */}
              {/* <DropdownItem><i className="fa fa-tasks"></i> Tarefas<Badge color="danger">42</Badge></DropdownItem> */}
              {/* <DropdownItem><i className="fa fa-comments"></i> Comentários<Badge color="warning">42</Badge></DropdownItem> */}
              <DropdownItem header tag="div" className="text-center"><strong>Ajustes</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Perfil</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Configurações</DropdownItem>
              {/* <DropdownItem><i className="fa fa-usd"></i> Pagamentos<Badge color="secondary">42</Badge></DropdownItem> */}
              {/* <DropdownItem><i className="fa fa-file"></i> Projetos<Badge color="primary">42</Badge></DropdownItem> */}
              <DropdownItem divider />
              {/* <DropdownItem><i className="fa fa-shield"></i> Proteção de Conta</DropdownItem> */}
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-power-off"></i> Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
