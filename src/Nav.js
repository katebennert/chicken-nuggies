import React from 'react';
import { scroller } from 'react-scroll';

function Nav() {

    const scrollToSection = (elementId) => {
        scroller.scrollTo(elementId, {
          duration: 800,
          delay: 0
        });
    };

    return (
        <nav>
            <span onClick={() => scrollToSection('about')} >
                About
            </span>
            <span onClick={() => scrollToSection('projects')}>
                Projects
            </span>
            <span onClick={() => scrollToSection('experience')}>
                Experience
            </span>
        </nav>
    );
  }
  
  export default Nav;
  