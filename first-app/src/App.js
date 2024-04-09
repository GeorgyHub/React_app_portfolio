import React from 'react';
import './App.css';
//import Map from './libraries/map.js';
//import Header from './Header.js';
//import Footer from './Footer.js';

const App = () => {
  return (
    <div className="App">
      <header className="Header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-AB4KLa5Q4jYOas-CixGrdSxaXPgDa9wQ2jtQwDAQ&s"/>
      </header>
      <nav className='nav'>
        <div>
          <a href="">Profile</a>
        </div>
        <div>
         <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
      </nav>
      <div className='Content'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/979/480/small/black-and-blue-abstract-banner-with-polygonal-pattern-template-for-your-header-and-presentation-modern-background-vector.jpg"></img>
      </div>
    </div>
  );
}

export default App;
