import React from 'react';
import './App.css';
import NameContextComponent from './context/NameContextComponent';
import WebRouting from './routes';

const App = () => {

  return (
    <>
        <NameContextComponent>
          <WebRouting />
        </NameContextComponent>
    </>
  );
}


export default App;
