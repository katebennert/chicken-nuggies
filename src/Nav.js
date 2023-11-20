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
        <nav className="flex flex-col justify-center items-center text-center">
            <ul className="text-donutBrown font-agbalumo text-2xl" >
                <li className="mb-4"><span onClick={() => scrollToSection("about")}>about</span></li>
                <li className="mb-4"><span onClick={() => scrollToSection("projects")}>projects</span></li>
                <li className=""><span onClick={() => scrollToSection("experience")}>experience</span></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  