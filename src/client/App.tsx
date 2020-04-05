import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
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
