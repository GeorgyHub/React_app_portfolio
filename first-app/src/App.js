import React from 'react';
import './App.css';
import Map from './libraries/map.js';
import Header from './Header.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Hello, world!</h1>
      <Map />
    </div>
  );
}

export default App;
