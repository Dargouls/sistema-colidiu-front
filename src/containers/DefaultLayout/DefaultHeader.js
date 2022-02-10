import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { getUser } from '../../services/auth';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo-smtt.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    const user = getUser()
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 50, height: 50, alt: 'SMTT Logo'}}
          minimized={{ src: logo, width: 30, height: 30, alt: 'SMTT Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
        
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/img_user.jpg'} className="img-avatar" alt="Imagem do perfil" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Perfil</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i>{user?.name}</DropdownItem>
              {/* <DropdownItem><i className="fa fa-wrench"></i> Configurações</DropdownItem> */}
              {/* <DropdownItem divider /> */}
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-power-off"></i> Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
