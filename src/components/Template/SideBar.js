import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Elorm Fountain AKLAMANU</h2>
        <p>
          <a href="mailto:elormaklamanu626@gmail.com">elormaklamanu626@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hello there, Elorm here. I am a{' '}
        <a href="https://www.knust.edu.gh/">KNUST</a> graduate, an engineer in training building expertise in control systems and robotics. 
        
    
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Elorm Aklamanu <Link to="/">eaklamanu.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
