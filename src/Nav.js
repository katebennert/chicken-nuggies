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
        <div className="flex justify-center items-center text-center">
            <ul className="" >
                <span onClick={() => scrollToSection("about")}>
                    <li className="burger-cursor hover:mix-blend-difference text-spPink">ABOUT</li>
                </span>
                <span onClick={() => scrollToSection("projects")}>
                    <li className="pizza-cursor hover:mix-blend-difference text-spOrange">PROJECTS</li>
                </span>
                <span onClick={() => scrollToSection("experience")}>
                    <li className="fries-cursor hover:mix-blend-difference text-spPurple">EXPERIENCE</li>
                </span>
            </ul>

        </div>
    );
  }
  
  export default Nav;
  