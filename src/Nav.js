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
                    <li className="donut-cursor hover:bg-spPink hover:text-bgPink rounded-full mb-2 p-1 text-xl transition duration-300 ease-in-out">ABOUT</li>
                </span>
                <span onClick={() => scrollToSection("projects")}>
                    <li className="donut-cursor hover:bg-spGreen hover:text-bgPink rounded-full mb-2 p-1 text-xl transition duration-300 ease-in-out">PROJECTS</li>
                </span>
                <span onClick={() => scrollToSection("experience")}>
                    <li className="donut-cursor hover:bg-spPurple hover:text-bgPink rounded-full p-1 text-xl transition duration-300 ease-in-out">EXPERIENCE</li>
                </span>
            </ul>

        </div>
    );
  }
  
  export default Nav;
  