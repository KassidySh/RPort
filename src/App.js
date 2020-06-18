import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import { HashRouter, Route, Switch } from 'react-router-dom'

import About from './About'
import Project from './Project'
import Footer from './Footer'
import Skills from './Skills'
import './App.css';

function App() {

  return (

    <main className='Main'>
      <nav class="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link smooth to='/#skills' class="text-dark"><h3>Skills</h3></Link>
        </li>
        <li className="nav-item">
          <Link smooth to='/#project' class="text-dark"><h3>Projects</h3></Link>
        </li>
        <li className="nav-item">
          <Link smooth to='/#footer' class="text-dark"><h3>Contact Me</h3></Link>
        </li>
        <li className="nav-item">
          <a class="text-dark" target="_blank" href="/Resume.pdf"><h3>Resumé</h3></a>
        </li>
      </nav>

      <div className='home'>
        <About />

        <Skills />


        <Project />


        <Footer />

      </div>
    </main>
  );
}

export default App;
