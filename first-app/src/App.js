import React from 'react';
import './App.css';
//import Map from './libraries/map.js';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
