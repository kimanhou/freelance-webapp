import React from 'react';
import './App.scss';
import NavigationBar from './view/components/navigation/NavigationBar';

const App : React.FC = props => {
  return (
    <div className={`app`}>
      <h1>{`Kim Anh & Mark`}</h1>
      <NavigationBar />
    </div>
  );
}
export default App;
