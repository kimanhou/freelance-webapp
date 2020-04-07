import React, { useState, useEffect, useRef } from 'react';
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
    const isBackgroundImageVisibleClassName = (isIndex) ? "visible" : "";
    const backgroundImages = [`./DSC_0217.jpg`, `./DSC_0104.jpg`, `./DSC_0441.jpg`];
    const backgroundImageIdexRef = useRef(0);
    const [backgroundUrl, setBackgroundUrl] = useState(backgroundImages[backgroundImageIdexRef.current]);
    useEffect(() => {
        const interval = setInterval(changeBackgroundUrl, 3000);
        return () => clearInterval(interval);
    }, []);
    const changeBackgroundUrl = () => {
        const idexCurrentUrl = backgroundImageIdexRef.current;
        if (idexCurrentUrl == backgroundImages.length - 1) {
            setBackgroundUrl(backgroundImages[0]);
            backgroundImageIdexRef.current = 0;
        }
        else {
            setBackgroundUrl(backgroundImages[idexCurrentUrl + 1]);
            backgroundImageIdexRef.current = idexCurrentUrl + 1;
        }
    }
    
    return (
        <div className={`app-routes`}>
        <img className={`image ${isBackgroundImageVisibleClassName}`} src={backgroundUrl}/>
          <AppHeader centerNavigationBar={isIndex} />
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