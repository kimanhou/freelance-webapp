import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './AppRoutes.scss';
import RouteModel from './RouteModel';
import AppHeader from './view/components/header/AppHeader';
import About from './view/page/About';
import Contact from './view/page/Contact';
import Work from './view/page/Work';

const AppRoutes : React.FC = props => {
    const location = useLocation();
    const isIndex = location.pathname == null || location.pathname == "/";
    const routesVisibleClassName = (isIndex) ? "" : "visible";
    const backgroundVisibleClassName = (isIndex) ? "visible" : "";
    
    return (
        <div className={`app-routes`}>
            <div className={`background ${backgroundVisibleClassName}`}>
                <img src="./DSC_0217.jpg" />
                <img src="./DSC_0104.jpg" />
                <img src="./DSC_0441.jpg" />
                <img src="./DSC_0517.jpg" />
            </div>
          <AppHeader isIndex={isIndex} />
          <div className={`app-routes-content ${routesVisibleClassName}`}>
            <Switch>
                <Route path={RouteModel.work.getPath()}>
                    <Work />
                </Route>
                <Route path={RouteModel.about.getPath()}>
                    <About />
                </Route>
                <Route path={RouteModel.contact.getPath()}>
                    <Contact />
                </Route>
            </Switch>
          </div>
        </div>
    )
}
export default AppRoutes;