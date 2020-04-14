import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './mixins.scss';
import IconLibrary from './business/IconLibrary';

IconLibrary.Init();
ReactDOM.render(<App />, document.getElementById('root'));
