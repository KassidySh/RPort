import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import About from './About'
import Project from './Project'
import './App.css';

function App() {
  return (

    <main className='Main'>
      <nav class="nav nav-pills nav-fill">
        <li class="nav-item">
          <Link to='/' className="nav-link"><h3>Home</h3></Link>
</li>
          <li className="nav-item">
          <Link to='/project' class="nav-link"><h3>Projects</h3></Link>
        </li>
      </nav>
      <div className='about'>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/project' component={Project} />
        </Switch>
      </div>
    </main>
  );
}

export default App;
