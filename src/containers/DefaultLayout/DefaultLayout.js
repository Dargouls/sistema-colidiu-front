import React, { Component, Suspense } from 'react';
import { irect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

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

  signOut(e) {
    e.preventDefault()
    logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="app" >
        <AppHeader fixed style={{backgroundColor: '#263238', borderColor: '#263238'}}>
          <Suspense  fallback={this.loading()} >
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body" >
          <AppSidebar fixed display="lg" >
            <AppSidebarHeader style={{background: '#263238'}}/>
            <AppSidebarForm style={{background: '#263238'}}/>
            <Suspense style={{background: '#263238'}}>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router} style={{backgroundColor: "#263238"}}/>
            </Suspense>
            <AppSidebarFooter style={{backgroundColor: "#263238"}} />
            <AppSidebarMinimizer style={{background: '#263238'}} />
          </AppSidebar>
          <main className="main" style={{background:  "linear-gradient(#f9bc00, #000)", opacity: 0.7}}>
            <AppBreadcrumb appRoutes={routes} router={router} style={{backgroundColor: '#263238'}} />
            <Container fluid >
              <Suspense fallback={this.loading()} >
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <irect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside> */}
        </div>
        <AppFooter style={{background: "#263238", borderColor: '#263238'}}>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;