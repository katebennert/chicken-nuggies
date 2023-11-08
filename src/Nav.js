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
        <div className="flex justify-center items-center">
            <nav className="flex flex-col space-y-4 w-32">
        <span
          onClick={() => scrollToSection('about')}
        >
          💋 ABOUT
        </span>
        <span
          onClick={() => scrollToSection('projects')}
          
        >
          🍩 PROJECTS
        </span>
        <span
          onClick={() => scrollToSection('experience')}
         
        >
          🔪 EXPERIENCE
        </span>
      </nav>
    </div>
    );
  }
  
  export default Nav;
  