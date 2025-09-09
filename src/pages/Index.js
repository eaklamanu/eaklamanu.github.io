import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Elorm's personal website. KNUST graduate, "
      + 'Control Systems Enthusiast. Writer.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to My Digital Hub</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript. Adapted from <a href="https://github.com/mldangelo/personal-site">Michael D&apos;Angelo&apos;s</a> work
          </p>
        </div>
      </header>
      <p>
        {' '}
        Hello and welcome. From code to circuits, poems to projects, and faith to life — this is where it all unfolds.
                My name is Elorm Fountain Aklamanu, an engineer passionate about using control systems and robotics to solve real-world problems. This space gives you glimpses into my Christian faith,
                my love for engineering, and my journey in art. I hope you find something that speaks to you. Enjoy your tour and feel free to reach out to <Link to="/contact">me</Link>. 
    
      </p>
      
    </article>
  </Main>
);

export default Index;
