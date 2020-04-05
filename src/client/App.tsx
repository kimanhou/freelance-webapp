import React from 'react';
import './App.scss';
import NavigationBar from './view/components/navigation/NavigationBar';
import Header from './view/components/header/Header';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import AboutUs from './view/page/AboutUs';
import RouteModel from './RouteModel';
import AppRoutes from './AppRoutes';

const App : React.FC = props => {
  return (
    <BrowserRouter>
      <div className={`app`}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
export default App;
