import React, { Component, Suspense } from 'react';
import { irect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { getUser } from '../../services/auth';


import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

import { logout } from "../../services/auth";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  constructor(props) {
    super(props);

    this.state = {
      items: navigation.items,
    };
  }

  signOut(e) {
    e.preventDefault()
    logout()
    this.props.history.push('/')
  }
  componentDidMount() {
    const user = getUser()
    if (user?.permissions === "all") {
      this.setState({
        items: [
          {
            name: "Dashboard",
            url: "/dashboard",
            icon: "icon-magnifier-add",
          },
          {
            name: "Validar ocorrência",
            url: "/ocorrencias",
            icon: "icon-magnifier-add",
          },
          {
            name: "Mapa de Calor",
            url: "/mapa-calor",
            icon: "icon-magnifier-add",
          },
        ]
      })
    }
  }
  render() {
    return (
      <div className="app" >
        <AppHeader fixed style={{ backgroundColor: '#263238', borderColor: '#263238' }}>
          <Suspense fallback={this.loading()} >
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body" >
          <AppSidebar fixed display="lg" >
            <AppSidebarHeader style={{ background: '#263238' }} />
            <AppSidebarForm style={{ background: '#263238' }} />
            <Suspense style={{ background: '#263238' }}>
              <AppSidebarNav navConfig={{ items: this.state.items }} {...this.props} router={router} style={{ backgroundColor: "#263238" }} />
            </Suspense>
            <AppSidebarFooter style={{ backgroundColor: "#263238" }} />
            <AppSidebarMinimizer style={{ background: '#263238' }} />
          </AppSidebar>
          <main className="main" style={{ background: "linear-gradient(#f9bc00, #000)" }}>
            <AppBreadcrumb appRoutes={routes} router={router} style={{ backgroundColor: '#263238' }} />
            <Container fluid >
              <Suspense fallback={this.loading()} >
                <Switch>
                  {routes.map((route, index) => {
                    return route.component ? (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter style={{ background: "#263238", borderColor: '#263238' }}>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
