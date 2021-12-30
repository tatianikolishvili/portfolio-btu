import React, {Component} from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
// import Contact from '/Contact'
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={ <Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          {/* <Route path='contact' element={<Contact/>}></Route> */}
          <Route path='projects' element={<Projects/>}></Route>
        </Routes>    
    </div>

    sklslk
    </BrowserRouter>
  );
}

export default App;
