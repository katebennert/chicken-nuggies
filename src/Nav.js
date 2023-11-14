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
            <ul className="text-donutBrown font-agbalumo nav" >
                <span onClick={() => scrollToSection("about")}>
                    <li className="hover:bg-spPink hover:text-white rounded-full mb-4 p-1 text-xl transition duration-300 ease-in-out cursor-pointer">ABOUT</li>
                </span>
                <span onClick={() => scrollToSection("projects")}>
                    <li className="hover:bg-spGreen hover:text-white rounded-full mb-4 p-1 text-xl transition duration-300 ease-in-out cursor-pointer">PROJECTS</li>
                </span>
                <span onClick={() => scrollToSection("experience")}>
                    <li className="hover:bg-spPurple hover:text-white rounded-full p-1 text-xl transition duration-300 ease-in-out cursor-pointer">EXPERIENCE</li>
                </span>
            </ul>

        </div>
    );
  }
  
  export default Nav;
  