import React from 'react';
import Header from './view/components/header/Header';
import { Switch, Route, useLocation } from 'react-router-dom';
import RouteModel from './RouteModel';
import AboutUs from './view/page/AboutUs';
import './AppRoutes.scss';

const AppRoutes : React.FC = props => {
    const location = useLocation();
    const isIndex = location.pathname == null || location.pathname == "/";
    const routesVisibleClassName = (isIndex)?"":"visible";
    return (
        <div className={`app-routes`}>
          <Header centerNavigationBar={isIndex} />
          <div className={`app-routes-content ${routesVisibleClassName}`}>
            <Switch>
                <Route path={RouteModel.aboutUs.getPath()}>
                <AboutUs />
                </Route>
            </Switch>
          </div>
        </div>
    )
}
export default AppRoutes;