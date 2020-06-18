import React from 'react';
import { Link } from "react-scroll";

import About from './About'
import Project from './Project'
import Footer from './Footer'
import Skills from './Skills'
import './App.css';

function App() {

  return (
    <main className='Main'>
      <nav class="nav nav-pills nav-fill">
        <li className="nav-item" id="skills">
          <Link
            activeClass="active"
            to="skillList"
            spy={true}
            offset={-70}
            duration={500}>
            <h3>
              Skills
          </h3>
          </Link>
        </li>
        <li className="nav-item" id="projects">
          <Link
            activeClass="active"
            to="Project"
            spy={true}
            offset={-70}
            duration={500}>
            <h3>
              Projects
          </h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            offset={-70}
            duration={500}>
            <h3>
              Contact Me</h3>
          </Link>
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
