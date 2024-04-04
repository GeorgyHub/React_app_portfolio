import React, { Component } from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Hello, world!</h1>
    </div>
  );
}

const Header = () => {
  return(
    <header>
      <div class="header_menu">
        <ul class="header_menu_link">
          <li>
            <a href=''>Header</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default App;
